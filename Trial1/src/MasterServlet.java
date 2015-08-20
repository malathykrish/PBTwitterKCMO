

import java.io.BufferedReader;

import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.ibm.jaql.json.type.JsonValue;
/**
 * Servlet implementation class MasterServlet
 */
@WebServlet("/MasterServlet")
public class MasterServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public MasterServlet() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    
    String searchString = "ABC" ;
    String byzipCode = null ;
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
		 Sample b = new Sample();
		JsonValue results =null;     
         
		if(request.getParameter("searchString") != null){
			searchString = request.getParameter("searchString");
	       
	        results   =   b.KCMOQuery6(searchString);
			
		}
         else if(request.getParameter("byzipCode") != null){
        	
        	 results = b.KCMOQuery4();
        	 
         }
         else if (request.getParameter("query1") != null){
        	 
        	 results = b.KCMOQuery1();
         }
         else if (request.getParameter("query2") != null){
        	 
        	 results = b.KCMOQuery2();
         }


		
String  data =  results.toString() ; // creates a String
data = data.replace("\n", "");
String x= data;
response.setContentType("application/json"); // sets the content type
response.setContentLength(results.toString().length());
response.getWriter().write(data);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		
	
	}

}
