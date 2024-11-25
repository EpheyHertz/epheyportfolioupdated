import axios from "axios";

// Handle GET request for fetching reviews
export async function GET(req) {
  try {
    // Fetch data from the external API
    const response = await axios.get(
      "https://epheyportfoliobackend.onrender.com/portfolio/reviews/"
    );

    // Return the fetched data to the client with status 200
    return new Response(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    // Log error for debugging purposes
    console.error("Error fetching testimonials:", error);

    // Return a descriptive error message with status 500
    return new Response(
      JSON.stringify({ error: "Failed to fetch testimonials" }),
      { status: 500 }
    );
  }
}
