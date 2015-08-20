import java.io.PrintWriter;

import com.ibm.jaql.json.type.JsonValue;
import com.ibm.jaql.lang.JaqlQuery;


public class Sample {
	
	
	
	public  JsonValue KCMOQuery1() {
		//count the  number of problems in each department. 
		JsonValue jv=null;
		try {
			JaqlQuery jq=new JaqlQuery();
			String ans="answer";
			//jq.setQueryString("jaqlGet(\"file:///home/biadmin/Desktop/kcmo311.json\") -> transform $.department;");
			jq.setQueryString("read(hdfs($result))-> group by $word = $.department into { \"name\":$word, \"data\":[count($.department)]};");
			jq.setVar("$result", ans);
			jv = jq.evaluate();
			
			System.out.println(jv);
			jq.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jv;

	}
	
	public JsonValue KCMOQuery2() {
		//geo location of problems in each department. 
		KCMOQuery();
		JsonValue jv=null;
		try {
			JaqlQuery jq=new JaqlQuery();
			String ans="answer";
			//jq.setQueryString("jaqlGet(\"file:///home/biadmin/Desktop/kcmo311.json\") -> transform $.department;");
			//jq.setQueryString("read(hdfs($result))-> transfrom {$.address_with_geocode.longitude, $.address_with_geocode.longitude, $.department } ;");
			jq.setQueryString("read(hdfs($result))-> transform {$.address_with_geocode.longitude, $.address_with_geocode.latitude, $.department , $.request_type,$.work_group,$.street_address,$.status} ;");
			jq.setVar("$result", ans);
			jv = jq.evaluate();
			//PrintWriter writer = new PrintWriter("/home/biadmin/Desktop/QueryResultsFinal/DepartmentGeo.json","UTF-8");
			//writer.println(jv);
			//writer.close();
			System.out.println(jv);
			jq.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jv;
	}
	public JsonValue KCMOQuery4() {
	// TODO Auto-generated method stub
	//zipcode
	KCMOQuery();
	
	JsonValue jv=null;
	try {
		JaqlQuery jq=new JaqlQuery();
		String ans="answer";
		jq.setQueryString("read(hdfs($result))-> group by $word = $.zip_code into { $word, num:count($.zip_code)}; ;");
		jq.setVar("$result", ans);
		jv = jq.evaluate();
		//PrintWriter writer = new PrintWriter("/home/biadmin/Desktop/QueryResults/ZipCount.json","UTF-8");
		//writer.println(jv);
		//writer.close();
		System.out.println(jv);
		jq.close();
	} catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return jv;


}
	
	public  JsonValue KCMOQuery6(String searchkey) {
		TwitterQuery();
		
		// TODO Auto-generated method stub
		// Search the twitter and get tweets having the key
		JsonValue jv = null;
		try {
			JaqlQuery jq=new JaqlQuery();
			String t="twt";
			String str=searchkey;
			jq.setQueryString("read(hdfs($twt))->filter strPos($.text,$key)!=-1 -> transform {$.text,$.geo}; ");
			jq.setVar("$twt",t);
			jq.setVar("$key", str);

			jv = jq.evaluate();


			//PrintWriter writer = new PrintWriter("/home/biadmin/Desktop/QueryResults/SearchResult.json","UTF-8");
			//writer.println(jv);
			//writer.close();
		   System.out.println(jv);
			jq.close();
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return jv;

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
		}	}
	
	private static void KCMOQuery() {
			// Reads the json from file and saves it in a variable $result through write. $result is answer which is local hdfs file. 
			try {
				JaqlQuery jq=new JaqlQuery();
				String ans="answer";
				//jq.setQueryString("jaqlGet(\"file:///home/biadmin/Desktop/kcmo311.json\") -> transform $.department;");
				jq.setQueryString("jaqlGet(\"file:///home/biadmin/Desktop/kcmo311.json\") -> write(hdfs($result));");
				jq.setVar("$result", ans);
				JsonValue jv = jq.evaluate();

				System.out.println(jv);
				jq.close();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
	}

		
	

}
