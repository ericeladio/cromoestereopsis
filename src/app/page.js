
import styles from './page.module.css'


export default function Home() {
  const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
]
  return(
    <div className={styles.gallery}>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTS21m64ueFfh9cNHn-pKBcAVtJHzwjdUhzNhwxjk&s" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
        <div className={styles.galleryItem}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHhR9QiCnYQsr6WHvjH9iwwdX4d4Yy6mJiXjkgaYkgevErygD7INU-SpMHQwP0njWGnkE&usqp=CAU" alt="Image 2"/>
        </div>
    </div>
  )
}
