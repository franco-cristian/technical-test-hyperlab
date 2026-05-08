# 🚀 Hyperlab Technical Test - Onboarding Flow

This repository contains the resolution for the Hyperlab Technical Test, implementing a complete Onboarding Wizard and Dashboard using **Laravel 13, Docker (Sail), React, Inertia.js, and Tailwind CSS**.

## 🛠️ Tech Stack & Architecture

- **Backend:** Laravel 13 (Breeze starter kit customized for the wizard).
- **Frontend:** React 18 + Inertia.js.
- **Styling:** Tailwind CSS (Pixel-perfect approach based on Figma).
- **TypeScript:** Strict typing for components and custom hooks.
- **Database:** MySQL (via Laravel Sail).
- **Environment:** Docker Desktop + WSL2.

### ✨ Key Architectural Decisions
- **Atomic Design & DRY:** Extracted reusable UI components (`BrandButton`, `WizardInput`, `WizardFooter`, `RadioOption`) to avoid code duplication across the 14+ screens.
- **Elastic Layout:** Implemented a unified `WizardLayout` using `100dvh` for mobile (fixing browser bar issues) and constrained `90vh` for desktop, ensuring the footer always sticks to the bottom without unnecessary scrolling.
- **Client-Side i18n:** Created a custom `useTranslation` hook with recursive JSON typing to handle instant, flicker-free language switching (English/Spanish).
- **Role-Based Branching:** The backend strictly controls the onboarding flow. After the `Password` step (user creation), the flow branches dynamically:
  - **Creator:** Birth Date -> Categories -> Gender -> Socials -> Avatar -> Bio -> Block Countries -> Username -> Dashboard.
  - **User:** Categories -> Completion -> Dashboard.

---

## ⚙️ Setup Instructions

Follow these steps to get the project running on your local machine using Laravel Sail (Docker).

### 1. Clone the repository
```bash
git clone https://github.com/franco-cristian/technical-test-hyperlab.git
cd technical-test-hyperlab
```

### 2. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env
```

### 3. Install Composer Dependencies (Using Docker)
If you don't have PHP installed locally, use a small Docker container to install the dependencies:
```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v "$(pwd):/var/www/html" \
    -w /var/www/html \
    laravelsail/php83-composer:latest \
    composer install --ignore-platform-reqs
```

### 4. Start Laravel Sail
Start the Docker containers (MySQL, Mailpit, Laravel app) in the background:
```bash
./vendor/bin/sail up -d
```

### 5. Application Initialization
Generate the app key and run database migrations with the initial seeders (Categories and Countries):
```bash
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate:fresh --seed
```

### 6. Install NPM Dependencies & Build Frontend
Install Node modules and start the Vite development server:
```bash
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

---

## 📱 How to view the Onboarding Flow

1. Open your browser and navigate to: **[http://localhost](http://localhost)**
2. You will land on the **Login** screen (Figma's default returning user view).
3. To start the Onboarding Wizard, click on **"Create an Account?"** at the bottom of the screen.
4. **Follow the flow:**
   - Select a Role (`Creator` or `User`).
   - Change the language using the top selector or the `Language` screen to test the custom i18n implementation.
   - Fill in the required fields (Name, Email, Password). 
   - *Note: Password requires at least 8 characters, 1 uppercase letter, and 1 number.*
5. Once registered, the backend will route you through the specific screens for your selected role.
6. The flow ends at the **Unified Dashboard**, showing a responsive interface with conditional rendering based on the user's role.

---

## 📝 Git History

The project was developed following **GitFlow** and **Atomic Commits** principles. You can review the commit history to see the logical progression from infrastructure setup to atomic components, and finally, the UI/UX implementation of the screens.
```
MIT LiCENSE
