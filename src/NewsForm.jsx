import React, { useState } from 'react';

function NewsForm() {
  const [formData, setFormData] = useState({
    english: {
      headline: '',
      subheading: '',
      date: '',
      photourl: '',
      b1: '',
      b2: '',
      b3: ''
    },
    marathi: {
      headline: '',
      subheading: '',
      date: '',
      photourl: '',
      b1: '',
      b2: '',
      b3: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const section = e.target.dataset.section;
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [name]: value
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now(); // Generate unique ID
    const newData = {
      id,
      ...formData
    };

    // Read existing data from the JSON file or initialize empty array

  };

  return (
    <div>
      <h2>Enter News Data</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>English</legend>
          <label htmlFor="englishHeadline">Headline:</label>
          <input
            type="text"
            id="englishHeadline"
            name="headline"
            data-section="english"
            value={formData.english.headline}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="englishHeadline">Subheading:</label>
          <input
            type="text"
            id="englishHeadline"
            name="subheading"
            data-section="english"
            value={formData.english.subheading}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="englishHeadline">Photo:</label>
          <input
            type="text"
            id="englishHeadline"
            name="photourl"
            data-section="english"
            value={formData.english.photourl}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="englishDate">Date:</label>
          <input
            type="date"
            id="englishDate"
            name="date"
            data-section="english"
            value={formData.english.date}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="englishHeadline">B1:</label>
          <input
            type="text"
            name="b1"
            data-section="english"
            value={formData.english.b1}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="englishHeadline">B2:</label>
          <input
            type="text"
            name="b2"
            data-section="english"
            value={formData.english.b2}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="englishHeadline">B3:</label>
          <input
            type="text"
            name="b3"
            data-section="english"
            value={formData.english.b3}
            onChange={handleInputChange}
            required
          />
        </fieldset>

        <fieldset>
          <legend>Marathi</legend>
          <label htmlFor="marathiHeadline">Headline:</label>
          <input
            type="text"
            id="marathiHeadline"
            name="headline"
            data-section="marathi"
            value={formData.marathi.headline}
            onChange={handleInputChange}
            required
          />
           <label htmlFor="marathiHeadline">Subheading:</label>
          <input
            type="text"
            id="marathiHeadline"
            name="subheading"
            data-section="marathi"
            value={formData.marathi.subheading}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="marathiHeadline">Photo:</label>
          <input
            type="text"
            id="marathiHeadline"
            name="photourl"
            data-section="marathi"
            value={formData.marathi.photourl}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="marathiDate">Date:</label>
          <input
            type="date"
            id="marathiDate"
            name="date"
            data-section="marathi"
            value={formData.marathi.date}
            onChange={handleInputChange}
            required
          />
         <label htmlFor="marathiHeadline">B1:</label>
          <input
            type="text"
            id="marathiHeadline"
            name="b1"
            data-section="marathi"
            value={formData.marathi.b1}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="marathiHeadline">B2:</label>
          <input
            type="text"
            id="marathiHeadline"
            name="b2"
            data-section="marathi"
            value={formData.marathi.b2}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="marathiHeadline">B3:</label>
          <input
            type="text"
            id="marathiHeadline"
            name="b3"
            data-section="marathi"
            value={formData.marathi.b3}
            onChange={handleInputChange}
            required
          />
        </fieldset>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewsForm;
