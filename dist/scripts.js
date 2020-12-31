( function() 
{
  // API call
  let apiCall = async() => 
  {
    let apiKey = "05BEAHZ43U53";
    try
    {
      let data = await axios(
        "https://api.tenor.com/v1/search?cats&key=" + apiKey
      );
      return data;
    }
    catch( err ) 
    {
      return console.error( "Error:", err );
    }
  };
  
  // define buttons
  const button1 = document.querySelector( "#button_1" );
  const button4 = document.querySelector( "#button_4" );
  const button10 = document.querySelector( "#button_10" );
  const buttonSurprise = document.querySelector( "#button_surprise" );
  const buttonParty = document.querySelector( "#button_party" );
  // define search input
  const searchGifs = document.querySelector( "#search_gifs" );
  //define form
  const gifForm = document.querySelector( "#gif_form" );
  // define gif results
  const gifResults = document.querySelector( "#gif_results" );

  // After API is loaded...
  apiCall().then( gifs => 
  {
    let result1 = gifs.data.results[0];
    console.log( result1.media[0].gif.url );
    gifForm.addEventListener ( "submit", event=> 
    {
      event.preventDefault();
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
