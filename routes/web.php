<?php

use App\Http\Controllers\OnboardingController;
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
    Route::get('/categories', [OnboardingController::class, 'categories'])->name('categories');
    Route::patch('/update', [OnboardingController::class, 'updateDetails'])->name('update');
});

require __DIR__.'/auth.php';
