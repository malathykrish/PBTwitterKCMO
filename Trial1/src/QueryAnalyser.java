import java.io.PrintWriter;

import com.ibm.jaql.json.type.JsonValue;
import com.ibm.jaql.lang.JaqlQuery;


public class QueryAnalyser {
	
	public static void main(String[] args){ 
		
		TwitterQuery();
		KCMOQuery5("Bike");
	}
	public void sample(String searchkey)
	{
		TwitterQuery();
		KCMOQuery5(searchkey);
	}
	public static  void KCMOQuery5(String searchkey) {
		// TODO Auto-generated method stub
		// Search the twitter and get tweets having the key
		try {
			JaqlQuery jq=new JaqlQuery();
			String t="twt";
			String str=searchkey;
			jq.setQueryString("read(hdfs($twt))->filter strPos($.text,$key)!=-1 -> transform {$.text,$.geo}; ");
			jq.setVar("$twt",t);
			jq.setVar("$key", str);

			JsonValue jv = jq.evaluate();


			PrintWriter writer = new PrintWriter("/home/biadmin/Desktop/QueryResults/SearchResult.json","UTF-8");
			writer.println(jv);
			writer.close();
			System.out.println(jv);
			jq.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	public static void TwitterQuery() {
		try {
			JaqlQuery jq=new JaqlQuery();
			String t="twt";
			jq.setQueryString("jaqlGet(\"file:///home/biadmin/Desktop/allTweet.json\")->write(hdfs($twt));");
			jq.setVar("$twt", t);
			JsonValue jv = jq.evaluate();

			System.out.println(jv);
			jq.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		try {
			JaqlQuery jq=new JaqlQuery();
			String t="twt1";
			jq.setQueryString("jaqlGet(\"file:///home/biadmin/Desktop/allTweet.json\")->write(hdfs($twt));");
			jq.setVar("$twt", t);
			JsonValue jv = jq.evaluate();

			System.out.println(jv);
			jq.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


	}
	

}
