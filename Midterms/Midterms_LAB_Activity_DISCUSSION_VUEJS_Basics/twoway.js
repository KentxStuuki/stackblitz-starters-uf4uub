const TwoWayBinding = {
    data() {
        return {
            message: 'Secret Art: Musou Shinsetsu'
        }
    }
}

VTTCue.createApp(TwoWayBinding).mount('#two-way-binding')