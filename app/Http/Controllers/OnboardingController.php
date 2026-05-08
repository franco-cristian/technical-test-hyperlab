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

    public function gender(): Response
    {
        return Inertia::render('Onboarding/Steps/Gender');
    }

    public function storeGender(Request $request): RedirectResponse
    {
        $request->validate(['gender' => 'required|in:male,female,other']);
        $request->user()->update(['gender' => $request->gender]);

        return redirect()->route('onboarding.socials');
    }

    public function socials(): Response
    {
        return Inertia::render('Onboarding/Steps/Socials');
    }

    public function storeSocials(Request $request): RedirectResponse
    {
        $request->validate([
            'instagram' => 'nullable|url|max:255',
            'tiktok' => 'nullable|url|max:255',
            'x' => 'nullable|url|max:255',
            'reddit' => 'nullable|url|max:255',
            'facebook' => 'nullable|url|max:255',
        ]);

        $platforms = ['instagram', 'tiktok', 'x', 'reddit', 'facebook'];
        $request->user()->socialLinks()->delete();

        foreach ($platforms as $platform) {
            if ($request->filled($platform)) {
                $request->user()->socialLinks()->create([
                    'platform' => $platform,
                    'url' => $request->input($platform),
                ]);
            }
        }

        return redirect()->route('onboarding.avatar');
    }

    public function avatar(): Response
    {
        return Inertia::render('Onboarding/Steps/Avatar');
    }

    public function storeAvatar(Request $request): RedirectResponse
    {
        $request->validate(['avatar' => 'nullable|image|max:4096']);
        if ($request->hasFile('avatar')) {
            $path = $request->file('avatar')->store('avatars', 'public');
            $request->user()->update(['avatar_path' => $path]);
        }

        return redirect()->route('onboarding.bio');
    }

    public function bio(): Response
    {
        return Inertia::render('Onboarding/Steps/Bio');
    }

    public function storeBio(Request $request): RedirectResponse
    {
        $request->validate(['bio' => 'nullable|string|max:1000']);
        $request->user()->update(['bio' => $request->bio]);

        return redirect()->route('onboarding.block_countries');
    }

    public function blockCountries(): Response
    {
        return Inertia::render('Onboarding/Steps/BlockCountries');
    }

    public function storeBlockCountries(Request $request): RedirectResponse
    {
        return redirect()->route('onboarding.username');
    }

    public function username(): Response
    {
        return Inertia::render('Onboarding/Steps/Username');
    }

    public function storeUsername(Request $request): RedirectResponse
    {
        return redirect()->route('onboarding.completion');
    }

    public function completion(): Response
    {
        return Inertia::render('Onboarding/Steps/Completion');
    }
}
