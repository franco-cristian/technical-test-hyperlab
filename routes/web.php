<?php

use App\Http\Controllers\OnboardingController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('guest')->group(function () {
    Route::get('/welcome', [OnboardingController::class, 'welcome'])->name('onboarding.welcome');
    Route::post('/welcome', [OnboardingController::class, 'storeRole']);

    Route::get('/setup/language', [OnboardingController::class, 'language'])->name('onboarding.language');
    Route::post('/setup/language', [OnboardingController::class, 'storeLanguage']);

    Route::get('/setup/name', [OnboardingController::class, 'name'])->name('onboarding.name');
    Route::post('/setup/name', [OnboardingController::class, 'storeName']);

    Route::get('/setup/email', [OnboardingController::class, 'email'])->name('onboarding.email');
    Route::post('/setup/email', [OnboardingController::class, 'storeEmail']);

    Route::get('/setup/password', [OnboardingController::class, 'password'])->name('onboarding.password');
    Route::post('/setup/password', [OnboardingController::class, 'storeRegister'])->name('onboarding.register');

    Route::get('/auth/google', function () {
        return redirect()->back();
    })->name('login.google');
});

Route::middleware('auth')->prefix('onboarding')->name('onboarding.')->group(function () {
    Route::get('/birth-date', [OnboardingController::class, 'birth'])->name('birth');
    Route::patch('/birth-date', [OnboardingController::class, 'storeBirth'])->name('storeBirth');

    Route::get('/categories', [OnboardingController::class, 'categories'])->name('categories');
    Route::patch('/categories', [OnboardingController::class, 'storeCategories'])->name('storeCategories');

    Route::get('/gender', [OnboardingController::class, 'gender'])->name('gender');
    Route::patch('/gender', [OnboardingController::class, 'storeGender'])->name('storeGender');

    Route::get('/socials', [OnboardingController::class, 'socials'])->name('socials');
    Route::patch('/socials', [OnboardingController::class, 'storeSocials'])->name('storeSocials');

    Route::get('/avatar', [OnboardingController::class, 'avatar'])->name('avatar');
    Route::post('/avatar', [OnboardingController::class, 'storeAvatar'])->name('storeAvatar');

    Route::get('/bio', [OnboardingController::class, 'bio'])->name('bio');
    Route::patch('/bio', [OnboardingController::class, 'storeBio'])->name('storeBio');

    Route::get('/block-countries', [OnboardingController::class, 'blockCountries'])->name('block_countries');
    Route::patch('/block-countries', [OnboardingController::class, 'storeBlockCountries'])->name('storeBlockCountries');

    Route::get('/username', [OnboardingController::class, 'username'])->name('username');
    Route::patch('/username', [OnboardingController::class, 'storeUsername'])->name('storeUsername');

    Route::get('/completion', [OnboardingController::class, 'completion'])->name('completion');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
