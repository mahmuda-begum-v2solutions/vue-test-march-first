export const vHighlight = {
    mounted(el: HTMLSpanElement, binding: {value: string}) {
        el.style.backgroundColor = binding.value || 'lightcoral'
        el.style.color = 'black'
    },
}