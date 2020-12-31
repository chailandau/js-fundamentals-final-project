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
      let result1 = gifs.data.results[1];
      console.log( result1.media[0].gif.url );
      const searchTitle = document.createElement( "p" );
      searchTitle.textContent = searchGifs.value;
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
        console.log( "4 checked" );
      } 
      else if( button10.checked ) 
      { 
        console.log( "10 checked" );
      } 
      else if( buttonSurprise.checked ) 
      { 
        console.log( "surprise checked" );
      } 
      else
      { 
        console.log( "nothing" );
      } 
    } );
  } );
} )();
