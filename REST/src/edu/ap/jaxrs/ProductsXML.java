package edu.ap.jaxrs;

import java.util.ArrayList;
import javax.xml.bind.annotation.XmlRootElement;
import org.json.*;
import javax.json.*;

@XmlRootElement
public class ProductsXML {

	private ArrayList<Product> products;
	
	public ArrayList<Product> getProducts() {
		return products;
	}

	public void setProducts(ArrayList<Product> products) {
		this.products = products;
	}
}
