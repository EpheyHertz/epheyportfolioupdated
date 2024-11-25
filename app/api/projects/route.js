import axios from 'axios';

// Named export GET to handle GET requests
export async function GET() {
  try {
    // Make the request to the external API
    const response = await axios.get('https://epheyportfoliobackend.onrender.com/portfolio/projects/');
    
    // Return the response data with a 200 status
    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching project data:", error);
    
    // Return error response with a 500 status
    return new Response(
      JSON.stringify({ message: 'Failed to fetch projects.' }),
      { status: 500 }
    );
  }
}


