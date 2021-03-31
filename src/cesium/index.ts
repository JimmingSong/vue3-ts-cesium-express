import * as Cesium from "cesium";

class CesiumClass {
    public viewer: Cesium.Viewer | undefined;
    constructor() {
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5MWRlYjM5MS1hMjIyLTRhMjctOTJkYy03MjMwODYyYmI3NjQiLCJpZCI6MTc2MjAsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODE4NjY2MzN9.YzXpzNE5c_oju4DPyS4J4FBjbw0uufrn_ZVpSvVqftk'
    }
    init (box = 'cesium-box', options?: Cesium.Viewer.ConstructorOptions): Cesium.Viewer {
        this.viewer = new Cesium.Viewer(box, options);
        return this.viewer;
    }
}

export default new CesiumClass();