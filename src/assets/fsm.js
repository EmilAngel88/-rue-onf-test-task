export const ElevatorAsObject = {
    waitTime: 3000,

    updateTimer: null,
    moveTimer: null,
    waitTimer: null,

    onUpdate: null,

    pressedButtons: [],

    state: [
        // Лифт находится на 1 этаже
        { floor: 1, isMoving: false, isWaiting: false, nextFloor: null },
    ],

    init(onUpdate = null) {
        this.updateTimer = setInterval(() => this.handlePressedButtons(), 1000);

        this.onUpdate = onUpdate;
    },

    getCurrentElevatorState() {
        return this.state.length > 0 ? this.state[this.state.length - 1] : null;
    },

    callElevator(nextFloor) {
        const notCalled = this.pressedButtons.indexOf(nextFloor) < 0;
        const currentFloor = this.state[ElevatorAsObject.state.length - 1].floor;
        if (nextFloor && notCalled && currentFloor !== nextFloor) this.pressedButtons.push(nextFloor);
    },

    updateState(nextState) {
        this.state.push(nextState);

        if (typeof this.onUpdate === "function") {
            this.onUpdate(this.getCurrentElevatorState());
        }
    },

    wait() {
        const { nextFloor: floor } = this.getCurrentElevatorState();

        this.updateState({floor, isMoving: false, isWaiting: true, nextFloor: null});

        this.waitTimer = setTimeout(() => {
            const { floor } = this.getCurrentElevatorState();

            this.updateState({floor, isMoving: false, isWaiting: false, nextFloor: null});
        }, this.waitTime);
    },

    goTo(nextFloor) {
        const { floor: prevFloor } = this.getCurrentElevatorState();
        const routeTime = Math.abs(prevFloor - nextFloor) * 1000;

        this.updateState({floor: null, isMoving: true, isWaiting: false, nextFloor});

        this.moveTimer = setTimeout(() => this.wait(), routeTime);
    },

    handlePressedButtons() {
        const { isWaiting, isMoving } = this.getCurrentElevatorState();
        const haveSomeButtonsPressed = this.pressedButtons.length > 0;

        if (!isMoving && !isWaiting && haveSomeButtonsPressed) {
            const nextFloor = this.pressedButtons.shift();

            this.goTo(nextFloor);
        }
    }
}
