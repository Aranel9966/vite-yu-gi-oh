import { reactive } from "vue";

export const store = reactive({
  apiLink:
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0&language=it",
  cards: [],
  serchName: "",
  serchType: "",
});
