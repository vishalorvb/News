
import { useState } from 'react';
import './App.css';
import { news } from './News';
import NewsDisplay from './Component/NewsDisplay';
import NewsForm from './NewsForm';
function App() {

    const [lag, setlag] = useState("english");
    const [num, setNum] = useState(1)
    return (
        <div>
            <header>
                <h1>VidyarthiMitra.org</h1>
            </header>
            <div>
                <div>
                    <label for="">English</label>
                    <input type="radio" name="lag" value="english"
                        onChange={e => {
                            setlag("english");
                        }}
                    />
                    <label for="">Marathi</label>
                    <input type="radio" name="lag" value="marathi"
                        onChange={e => {
                            setlag("marathi");
                        }}
                    />
                    <label >Select news</label>
                    <select
                        onChange={e => setNum(e.target.value)}
                    >
                        {news.map(n => <option value={n.id}>{n.id}</option>)}
                    </select>
                </div>
                <NewsDisplay
                    news={news.filter(n => n.id == num)[0][lag]}
                ></NewsDisplay>
            </div>
            <footer>
                <p>&copy; 2024 Oceanic News Network. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
