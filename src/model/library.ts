import NewLibrary from "./newLibrary";

export default interface Library extends NewLibrary {
    _id: string,
    _rev: string,
}
