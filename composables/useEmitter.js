import emit from 'mitt';

const emitter = emit();

export default function useEmitter(){
    return {
        $on: emitter.on,
        $emit: emitter.emit,
    }
}

