<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Country;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class OnboardingSeeder extends Seeder
{
    public function run(): void
    {
        $categories = ['Musica', 'Deportes', 'Tecnología', 'Arte', 'Viajes', 'Moda', 'Cocina', 'Gaming'];

        foreach ($categories as $cat) {
            Category::firstOrCreate([
                'slug' => Str::slug($cat),
            ], [
                'name' => $cat,
            ]);
        }

        $countries = [['code' => 'AR', 'name' => 'Argentina'], ['code' => 'BR', 'name' => 'Brasil'],
            ['code' => 'CO', 'name' => 'Colombia'], ['code' => 'ES', 'name' => 'España'], ['code' => 'US', 'name' => 'Estados Unidos'],
            ['code' => 'FR', 'name' => 'Francia'],
            ['code' => 'IT', 'name' => 'Italia'], ['code' => 'RU', 'name' => 'Rusia'],
        ];

        foreach ($countries as $country) {
            Country::firstOrCreate(['code' => $country['code']], $country);
        }
    }
}
