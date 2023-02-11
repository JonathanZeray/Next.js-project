import styles from "../../styles/Contact.module.css";
import Link from "next/link";


export const getStaticProps = async () => {
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        props: { people: data }
    }
}
const Ninjas = ( { people }) => {
    return (
      <div>
        <h1>All People</h1>
        {people.map(ppl => (
            <Link href={"./ninjas/" + ppl.id} key={ppl.id}>
                <ul className={styles.single}>
                    <h3> {ppl.name} </h3>
                </ul>
            </Link>
        ))}
      </div>
    );
  }
   
  export default Ninjas;