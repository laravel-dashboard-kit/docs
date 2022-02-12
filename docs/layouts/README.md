---
sidebar: auto
---

# Introduction

Layouts is the main component to display dashboard content. You can have any number of layouts you need, but I suggest to have these 3 [layouts](#available-layouts) in you project.

## Define dashboard layout

Layouts are available under `{your-dir}/resources/views/layouts` directory.  To use [default](#default-layout) layout

```html
<x-dashboard-app>
    ...
</x-dashboard-app>
```

To use another layout:

```html
<x-dashboard-app-blank>
    ...
</x-dashboard-app-blank>
```

Where blank is the layout name.

## App

The basic html file which will be extended in your layouts. Create new file `{your-dir}/resources/views/partials/app.blade.php`.

Example from [Dashboard Cleopatra](https://github.com/laravel-dashboard-kit/dashboard-cleopatra/blob/master/resources/views/app.blade.php):

```html
<!DOCTYPE html>
<html>

{--
    Separated head in another file
    @see https://github.com/laravel-dashboard-kit/dashboard-cleopatra/blob/master/resources/views/partials/head.blade.php
--}
@include('dashboard-cleopatra::partials.head')

@yield('body')

</html>
```

## Available layouts

These are suggested layouts for your dashboard theme. You can have another naming. The suggested directory structure for layouts assets:

- `{your-dir}/resources/views/partials` To have parts of your code that will be used in multiple layouts
- `{your-dir}/resources/views/areas/{layout-name}` To have parts of your code that will be used in each single layout

### Full

It's the basic layout which contains sidebar, horizontal bar and content. Or any structure you prefer. Example from [Cleopatra Dashboard](https://github.com/laravel-dashboard-kit/dashboard-cleopatra/blob/master/resources/views/layouts/full.blade.php):

```html
{-- Extend basic html structure for all your layouts --}
@extends('dashboard-cleopatra::app')

@section('body')

    <body class="bg-gray-100">
        {-- Include preloader if you need --}
        @include('dashboard-cleopatra::partials.loader')

        {-- Include navbar if you have a one --}
        @include('dashboard-cleopatra::areas.full.main-header')

        <div class="h-screen flex flex-row flex-wrap">
            {-- Include sidebar --}
            @include('dashboard-cleopatra::areas.full.main-sidebar')

            {-- Include content wrapper tags --}
            @include('dashboard-cleopatra::areas.full.content')

            {-- Place holder for modals if you need to call them later --}
            @yield('modals')
        </div>

        {-- Include footer if you have a one --}
        @include('dashboard-cleopatra::partials.footer')
    </body>
@endsection
```

### Horizontal

A layout with sidebar content on top, or any structure you prefer. Example from [Cleopatra Dashboard](https://github.com/laravel-dashboard-kit/dashboard-cleopatra/blob/master/resources/views/layouts/horizontal.blade.php):

```html
@extends('dashboard-cleopatra::app')

@section('body')

    <body class="bg-gray-100">
        @include('dashboard-cleopatra::partials.loader')

        @include('dashboard-cleopatra::areas.horizontal.main-header')

        <div class="h-screen flex flex-row flex-wrap">
            {-- Using custom dashboard component is allowed --}
            <x-dashboard-container>
                @include('dashboard-cleopatra::areas.horizontal.content')

                @yield('modals')
            </x-dashboard-container>
        </div>

        @include('dashboard-cleopatra::partials.footer')
    </body>
@endsection
```

### Blank

A layout with minimal content, or any structure you prefer.

```html
@extends('dashboard-cleopatra::app')

@section('body')
    <body class="bg-gray-100">
        @include('dashboard-cleopatra::partials.loader')

        <div class="h-screen flex flex-row flex-wrap">
            <x-dashboard-container>
                {!! $slot !!}
            </x-dashboard-container>
        </div>

        @include('dashboard-cleopatra::partials.footer')
    </body>
@endsection
```

## Config

### [Default layout](/config/#layout)
