//src/constants/inventoryEvents.js 
export const INTERVIEW_EVENTS = {
    STOCK_IN: "STOCK_IN",
    STOCK_OUT: "STOCK_OUT",

    PURCHASE_IN: "PURCHASE",
    SALE: "SALE",

    RETURN_IN: "RETURN_IN",
    RETURN_OUT: "RETURN_OUT",

    DAMAGE: "DAMAGE",
    LOSS: "LOSS",

    ADJUSTMENT: "ADJUSTMENT",

    LOW_STOCK_ALERT: "LOW_STOCK_ALERT"
};

export const INTERVIEW_EVENT_LIST = 
    Object.values(INTERVIEW_EVENTS);

    