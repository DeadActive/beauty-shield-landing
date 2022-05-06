<template>
    <div class="d-flex flex-column">
        <h4
            style="font-size: 12px; font-weight: 600; text-transform: uppercase"
            class="mb-1"
        >
            {{ $attrs.label }}
        </h4>
        <slot></slot>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
