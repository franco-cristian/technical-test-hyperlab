<?php

namespace App\Http\Controllers;

use App\Enums\UserRole;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;
use Inertia\Response;

class OnboardingController extends Controller
{
    public function welcome(): Response
    {
        return Inertia::render('Onboarding/Welcome');
    }

    public function storeRole(Request $request): RedirectResponse
    {
        $request->validate(['role' => 'required|string|in:creator,user']);
        session(['onboarding.role' => $request->role]);

        return redirect()->route('onboarding.language');
    }

    public function language(): Response
    {
        return Inertia::render('Onboarding/Language');
    }

    public function storeLanguage(Request $request): RedirectResponse
    {
        $request->validate(['locale' => 'required|in:es,en']);
        session(['onboarding.locale' => $request->locale]);
        app()->setLocale($request->locale);

        return redirect()->route('onboarding.name');
    }

    public function name(): Response
    {
        return Inertia::render('Onboarding/Name');
    }

    public function storeName(Request $request): RedirectResponse
    {
        $request->validate(['name' => 'required|string|max:255|min:3']);
        session(['onboarding.name' => $request->name]);

        return redirect()->route('onboarding.email');
    }

    public function email(): Response
    {
        return Inertia::render('Onboarding/Email');
    }

    public function storeEmail(Request $request): RedirectResponse
    {
        $request->validate(['email' => 'required|string|lowercase|email|max:255|unique:'.User::class]);
        session(['onboarding.email' => $request->email]);

        return redirect()->route('onboarding.password');
    }

    public function password(): Response
    {
        return Inertia::render('Onboarding/Password');
    }

    public function storeRegister(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => [
                'required',
                'string',
                'min:8',
                'regex:/[A-Z]/',
                'regex:/[0-9]/',
            ],
        ]);

        $role = session('onboarding.role', 'user');
        $locale = session('onboarding.locale', 'en');
        $name = session('onboarding.name');
        $email = session('onboarding.email');

        if (! $email || ! $name) {
            return redirect()->route('onboarding.welcome');
        }

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => Hash::make($request->password),
            'role' => $role,
            'locale' => $locale,
        ]);

        Auth::login($user);
        session()->forget('onboarding');

        if ($user->role === UserRole::CREATOR) {
            return redirect()->route('onboarding.birth');
        }

        return redirect()->route('onboarding.categories');
    }

    public function birth(): Response
    {
        return Inertia::render('Onboarding/Steps/BirthDate');
    }

    public function storeBirth(Request $request): RedirectResponse
    {
        $request->validate(['birth_date' => 'required|date|before:today']);
        $request->user()->update(['birth_date' => $request->birth_date]);

        return redirect()->route('onboarding.categories');
    }

    public function categories(): Response
    {
        return Inertia::render('Onboarding/Steps/Categories', [
            'availableCategories' => Category::all(['id', 'name']),
        ]);
    }

    public function storeCategories(Request $request): RedirectResponse
    {
        $request->validate([
            'categories' => 'required|array|min:1|max:3',
            'categories.*' => 'exists:categories,id',
        ]);

        $request->user()->categories()->sync($request->categories);

        if ($request->user()->role === UserRole::CREATOR) {
            return redirect()->route('onboarding.gender');
        }

        return redirect()->route('dashboard');
    }
}
