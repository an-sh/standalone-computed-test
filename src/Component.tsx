import { defineComponent } from 'vue';
import { makeService } from './Service';

export const Component = defineComponent({
    setup() {
        const singleton = makeService();
        function incr() {
            singleton.counter.value++;
        }
        return () => {
            return (
                <div>
                    <div>Ref: {singleton.counter.value}</div>
                    <div>Computed: {singleton.counterComputed.value}</div>
                    <button onClick={incr}>Incement</button>
                </div>
            );
        };
    },
});
