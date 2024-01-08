<script lang="ts">
import Tag from './Tag.vue';

export default {
    props: {
        ingrediente: { type: String, required: true }
    },
    components: { Tag },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        clkSelecionar() {
            this.selecionado = !this.selecionado

            this.selecionado ?
                this.$emit("adicionarIngrediente", this.ingrediente) :
                this.$emit("removerIngrediente", this.ingrediente);
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <button class="ingrediente" 
        @click="clkSelecionar"
        :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>    
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
