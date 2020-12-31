// wrap JS in IIFE
( function() 
{
  // define search input
  const searchGifs = document.querySelector( "#search_gifs" );
  // define buttons
  const button1 = document.querySelector( "#button_1" );
  const button4 = document.querySelector( "#button_4" );
  const button10 = document.querySelector( "#button_10" );
  const buttonSurprise = document.querySelector( "#button_surprise" );
  //define form
  const gifForm = document.querySelector( "#gif_form" );
  // define gif results
  const gifResults = document.querySelector( "#gif_results" );

  gifForm.addEventListener ( "submit", event=> 
  {
    event.preventDefault();
    // API call
    let apiCall = async() => 
    {
      let apiKey = "05BEAHZ43U53";
      try
      {
        let data = await axios(
          `https://api.tenor.com/v1/search?q=${searchGifs.value}&key=${apiKey}`
        );
        return data;
      }
      catch( err ) 
      {
        return console.error( "Error:", err );
      }
    };
    // After API is loaded...
    apiCall().then( gifs => 
    {
      let result1 = gifs.data.results[0];
      let result2 = gifs.data.results[1];
      let result3 = gifs.data.results[2];
      let result4 = gifs.data.results[3];
      let result5 = gifs.data.results[4];
      let result6 = gifs.data.results[5];
      let result7 = gifs.data.results[6];
      let result8 = gifs.data.results[7];
      let result9 = gifs.data.results[8];
      let result10 = gifs.data.results[9];
      const searchTitle = document.createElement( "p" );
      searchTitle.className = "search-title";
      searchTitle.textContent = `You searched for... ${searchGifs.value}`;
      gifResults.innerHTML = "";
      gifResults.appendChild( searchTitle );

      console.log( searchGifs.value );
      if( button1.checked ) 
      { 
        const image = document.createElement( "img" );
        image.src = result1.media[0].gif.url;
        gifResults.appendChild( image );    
      }
      else if( button4.checked ) 
      { 
        const image1 = document.createElement( "img" );
        image1.src = result1.media[0].gif.url;
        gifResults.appendChild( image1 ); 

        const image2 = document.createElement( "img" );
        image2.src = result2.media[0].gif.url;
        gifResults.appendChild( image2 ); 

        const image3 = document.createElement( "img" );
        image3.src = result3.media[0].gif.url;
        gifResults.appendChild( image3 ); 

        const image4 = document.createElement( "img" );
        image4.src = result4.media[0].gif.url;
        gifResults.appendChild( image4 ); 
      } 
      else if( button10.checked ) 
      { 
        const image1 = document.createElement( "img" );
        image1.src = result1.media[0].gif.url;
        gifResults.appendChild( image1 ); 

        const image2 = document.createElement( "img" );
        image2.src = result2.media[0].gif.url;
        gifResults.appendChild( image2 ); 

        const image3 = document.createElement( "img" );
        image3.src = result3.media[0].gif.url;
        gifResults.appendChild( image3 ); 

        const image4 = document.createElement( "img" );
        image4.src = result4.media[0].gif.url;
        gifResults.appendChild( image4 ); 

        const image5 = document.createElement( "img" );
        image5.src = result5.media[0].gif.url;
        gifResults.appendChild( image5 ); 

        const image6 = document.createElement( "img" );
        image6.src = result6.media[0].gif.url;
        gifResults.appendChild( image6 ); 

        const image7 = document.createElement( "img" );
        image7.src = result7.media[0].gif.url;
        gifResults.appendChild( image7 ); 

        const image8 = document.createElement( "img" );
        image8.src = result8.media[0].gif.url;
        gifResults.appendChild( image8 ); 

        const image9 = document.createElement( "img" );
        image9.src = result9.media[0].gif.url;
        gifResults.appendChild( image9 ); 

        const image10 = document.createElement( "img" );
        image10.src = result10.media[0].gif.url;
        gifResults.appendChild( image10 ); 
      } 
      else
      { 
        console.log( "error" );
      } 
    } );
  } );
} )();
