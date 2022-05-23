export const STAGE_WIDTH = 6;
export const STAGE_HEIGHT = 7;

export const createStage = () => {
    const stage = Array.from(Array(STAGE_HEIGHT), () =>
        new Array(STAGE_WIDTH).fill('empty'),
    );
    // console.log(stage);
    return stage;
}