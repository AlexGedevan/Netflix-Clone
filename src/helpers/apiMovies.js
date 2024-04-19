import { getDatabase, onValue, ref } from "firebase/database";

export function getPopularMovies() {
  const db = getDatabase();
  const starCountRef = ref(db, "/movies");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data.Popular);
    return data.Popular;
  });
}
