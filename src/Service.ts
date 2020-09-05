import { ref, computed } from 'vue';

export class Service {
    public counter = ref(0);
    public counterComputed = computed(() => this.counter.value);
}

let singleton: Service;

export function makeService() {
    if (!singleton) {
        singleton = new Service();
    }
    return singleton;
}
