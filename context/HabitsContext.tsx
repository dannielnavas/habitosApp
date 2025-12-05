import { Habit, Priority } from "@/types/habits";
import { isSameDay, isYesterday, toISO } from "@/utils/date";

type State = {
    loading: boolean;
    habits: Habit[];

}

type Action = | {
    type: "HIDRATE";
    payload: Habit[];
} | {
    type: "ADD";
    title: string;
    priority?: Priority;
} | {
    type: "TOGGLE";
    id: string;
    today: Date;
}


const STORAGE_KEY = 'habits:v1';

const initialState: State = {
    loading: true,
    habits: [],
}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "HIDRATE":
            return {
                loading: true,
                habits: action.payload,
            }
        case "ADD":
            const date = new Date();
            const newHabit: Habit = {
                id: Math.random().toString(),
                title: action.title,
                priority: action.priority ?? 'low',
                createdAt: toISO(date),
                lastDoneAt: null,
                streak: 0,
            }
            return {
                ...state,
                habits: [...state.habits, newHabit],
            }
        case "TOGGLE":
            const { id, today } = action;
            const todayISO = toISO(today);
            const updated = state.habits.map(habit => {
                if (habit.id !== id) return habit;
                const last = habit.lastDoneAt ? new Date(habit.lastDoneAt) : null;
                const yaHechoHoy = last ? isSameDay(last, today) : false;
                if (yaHechoHoy) return {
                    ...habit,
                    streak: Math.max(0, habit.streak - 1),
                    lastDoneAt: null,
                };

                let newStreak = 1;
                if (last && isYesterday(last, today)) {
                    newStreak = habit.streak + 1;
                } else {
                    newStreak = 1;
                }
                return {
                    ...habit,
                    streak: newStreak,
                    lastDoneAt: todayISO,
                }
            });
            return {
                ...state,
                habits: updated,
            }
        default:
            return state;
    }
}
