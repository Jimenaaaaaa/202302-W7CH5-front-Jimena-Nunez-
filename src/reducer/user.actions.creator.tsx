import { createAction } from "@reduxjs/toolkit";
import { UserStructure } from "../entities/users.js";
import { userActions } from "./user.actions.types";

export const loadAllCreator = createAction<UserStructure[]>(userActions.load);
export const loadOneCreator = createAction<UserStructure>(userActions.loadOne);
export const updateCreator = createAction<UserStructure>(userActions.update);
export const addCreator = createAction<UserStructure>(userActions.add);
export const deleteCreator = createAction(userActions.delete);
