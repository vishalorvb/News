
import { useState } from 'react';
import './App.css';

function App() {

    const [lag, setlag] = useState("english");
    console.log(lag)
    return (
        <div>
            <header>
                <h1>VidyarthiMitra.org</h1>
            </header>
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
            </div>
            {lag == "english" && <main>
                <h1>IIT Gandhinagar collaborates with University of San Diego for joint, dual degree courses</h1>
                <article>
                    <h2>With the new partnership, the two institutes will offer joint double master’s programmes, dual degree programmes at BTech and master’s levels,</h2>
                    <p>Published on January 14, 2024</p>
                    <img src="news.jpg" />
                    <p>The Indian Institute of Technology (IIT) Gandhinagar and the University of San Diego, USA, have entered into an agreement to collaborate in various academic, research, capacity building, training, and faculty/staff development activities.

                        With this new partnership, the institutes will offer joint double master’s programmes, dual degree programmes at BTech and master’s levels, including master’s in engineering management and leadership and joint executive education programmes.

                        The MoU was signed and exchanged by Prof Chell Roberts, Dean, Shiley-Marcos School of Engineering (SMSE), University of San Diego, and Prof S P Mehrotra, Professor-in-Charge, External Relations, IITGN, in the presence of Prof G B Singh, Academic Director, University of San Diego, and Prof Rajat Moona, Director, IITGN, today at the IITGN campus to pave the way for a fruitful and active partnership between both the institutes.</p>

                    <p>This agreement will also facilitate the exchange of incubation, innovation, and entrepreneurship activities; organisation of joint seminars, workshops, and conferences; implementation of staff/faculty development programmes, capacity building, and specialised training programmes; and implementation of short-term student programmes for education camps or internships to facilitate a two-way exchange of students and research scholars.</p>

                    <p>Prof Rajat Moona, Director, IIT Gandhinagar while signing the agreement said: “It is our pleasure to team up with the University of San Diego to serve our shared goals of providing the best of global education, training, and exposure to our students, faculty, researchers, and staff to excel in their fields.”</p>
                </article>
            </main>}

            {lag == "marathi" && <div>

                <main>
                    <article>
                        <h1>
                            IIT गांधीनगर संयुक्त, दुहेरी पदवी अभ्यासक्रमांसाठी सॅन दिएगो विद्यापीठाशी सहयोग करते</h1>
                        <h2>
                            नवीन भागीदारीसह, दोन्ही संस्था संयुक्त डबल मास्टर्स प्रोग्राम्स, बीटेक आणि मास्टर्स स्तरांवर ड्युअल डिग्री प्रोग्राम्स ऑफर करतील,</h2>
                        <p>Published on January 14, 2024</p>
                        <img src="news.jpg" />
                        <p>इंडियन इन्स्टिट्यूट ऑफ टेक्नॉलॉजी (IIT) गांधीनगर आणि युनिव्हर्सिटी ऑफ सॅन डिएगो, यूएसए, यांनी विविध शैक्षणिक, संशोधन, क्षमता बांधणी, प्रशिक्षण आणि प्राध्यापक/कर्मचारी विकास क्रियाकलापांमध्ये सहयोग करण्यासाठी करार केला आहे.

                            या नवीन भागीदारीसह, संस्था संयुक्त दुहेरी मास्टर्स प्रोग्राम्स, बीटेक आणि पदव्युत्तर स्तरावरील दुहेरी पदवी कार्यक्रम, अभियांत्रिकी व्यवस्थापन आणि नेतृत्व आणि संयुक्त कार्यकारी शिक्षण कार्यक्रमांसह मास्टर्स ऑफर करतील.

                            या सामंजस्य करारावर प्रोफेसर चेल रॉबर्ट्स, डीन, शिले-मार्कोस स्कूल ऑफ इंजिनीअरिंग (SMSE), सॅन दिएगो विद्यापीठ आणि प्रो. जी बी यांच्या उपस्थितीत प्रोफेसर-इन-चार्ज, बाह्य संबंध, IITGN, प्रोफेसर एस पी मेहरोत्रा ​​यांनी स्वाक्षरी केली आणि देवाणघेवाण केली. सिंग, सॅन दिएगो विद्यापीठाचे शैक्षणिक संचालक आणि प्रा. रजत मुना, संचालक, IITGN, आज IITGN कॅम्पसमध्ये दोन्ही संस्थांमधील फलदायी आणि सक्रिय भागीदारीचा मार्ग मोकळा करण्यासाठी.</p>

                        <p>हा करार उष्मायन, नवोपक्रम आणि उद्योजकता क्रियाकलापांची देवाणघेवाण सुलभ करेल; संयुक्त परिसंवाद, कार्यशाळा आणि परिषदांचे आयोजन; कर्मचारी/शिक्षक विकास कार्यक्रमांची अंमलबजावणी, क्षमता वाढवणे आणि विशेष प्रशिक्षण कार्यक्रम; आणि विद्यार्थी आणि संशोधन विद्वानांची द्वि-मार्गी देवाणघेवाण सुलभ करण्यासाठी शैक्षणिक शिबिरे किंवा इंटर्नशिपसाठी अल्पकालीन विद्यार्थी कार्यक्रमांची अंमलबजावणी.</p>

                        <p>आयआयटी गांधीनगरचे संचालक प्रा रजत मुना यांनी करारावर स्वाक्षरी करताना सांगितले: “आमच्या विद्यार्थ्यांना, प्राध्यापकांना सर्वोत्कृष्ट जागतिक शिक्षण, प्रशिक्षण आणि एक्स्पोजर प्रदान करण्याच्या आमच्या सामायिक उद्दिष्टांची पूर्तता करण्यासाठी सॅन दिएगो विद्यापीठासोबत काम करताना आम्हाला आनंद होत आहे. , संशोधक आणि कर्मचारी त्यांच्या क्षेत्रात उत्कृष्ट कामगिरी करतात.”</p>
                    </article>
                </main> </div>}

            <footer>
                <p>&copy; 2024 Oceanic News Network. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;
