import { defineComponent, ref } from 'vue';
import { Component } from './Component';

export default defineComponent({
    setup() {
        const show = ref(true);
        function toggle() {
            show.value = !show.value;
        }
        return () => {
            return (
                <div>
                    <button onClick={toggle}>Toggle</button>
                    {show.value ? <Component></Component> : ''}
                </div>
            );
        };
    },
});
