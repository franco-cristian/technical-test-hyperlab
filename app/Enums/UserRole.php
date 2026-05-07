<?php

namespace App\Enums;

enum UserRole: string
{
    case CREATOR = 'creator';
    case USER = 'user';

    public function label(): string
    {
        return match ($this) {
            self::CREATOR => 'Creador',
            self::USER => 'Usuario',
        };
    }
}
