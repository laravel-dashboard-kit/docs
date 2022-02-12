# Form image

`x-dashboard-form-image`

```html
@props([
    'name',
    'previewSrc' => 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
    'id' => Str::slug(uniqid($name)),
    'hideLabel' => false,
])

<div dir="{{ dashboard_rtl('rtl', 'ltr') }}"
    @class([' '. $attributes['class'] ])>
    @unless($hideLabel)
        @include('dashboard-cleopatra::components.form.label')
    @endunless

    <x-dashboard-loading livewire />

    <div wire:loading.remove>
        <img class="w-full" src="{{ $previewSrc }}">
    </div>

    <div wire:loading>
        <img class="w-full" id="{{ $id }}_preview">
    </div>

    <input type="file"
        id="{{$id}}"
        wire:loading.remove
        {{ $attributes->except(['class', 'value'])->merge([
            'value' => is_string($attributes->get('name')) && strlen(old($attributes->get('name'))) > 0 ? old($attributes->get('name')) : $attributes->get('value'),
        ]) }} />

    @error($attributes->get('name'))
        <div class="text-red-500">
            {{ $message }}
        </div>
    @enderror
</div>

@push('scripts')
    <script>
        var input = document.getElementById('{{ $id }}');

        input.onchange = function(event) {
            if (event.target.files.length > 0) {
                document.getElementById('{{ $id }}_preview').src = URL.createObjectURL(event.target.files[0])
            }
        }

        input.onload = function(event) {
            if (event.target.files.length > 0) {
                document.getElementById('{{ $id }}_preview').src = URL.createObjectURL(event.target.files[0])
            }
        }
    </script>
@endpush
```
