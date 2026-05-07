<?php

namespace App\Enums;

enum UserGender: string
{
    case MALE = 'male';
    case FEMALE = 'female';
    case OTHER = 'other';

    public function label(): string
    {
        return match ($this) {
            self::MALE => 'Hombre',
            self::FEMALE => 'Mujer',
            self::OTHER => 'Otro',
        };
    }
}
