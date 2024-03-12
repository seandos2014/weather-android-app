package com.ade.myweatherapp;

import android.graphics.Color;
import android.os.Bundle;

import com.ade.myweatherapp.ui.main.PlaceholderFragment;
import com.google.android.material.floatingactionbutton.FloatingActionButton;
import com.google.android.material.snackbar.Snackbar;
import com.google.android.material.tabs.TabLayout;
import androidx.viewpager.widget.ViewPager;
import androidx.appcompat.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.TextView;

import com.ade.myweatherapp.ui.main.SectionsPagerAdapter;
import com.ade.myweatherapp.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

     binding = ActivityMainBinding.inflate(getLayoutInflater());
     setContentView(binding.getRoot());

        SectionsPagerAdapter sectionsPagerAdapter = new SectionsPagerAdapter(this, getSupportFragmentManager());
        //ViewPager viewPager = binding.viewPager;
        //viewPager.setAdapter(sectionsPagerAdapter);
        //TabLayout tabs = binding.tabs;
        //tabs.setupWithViewPager(viewPager);
        //tabs.setSelectedTabIndicatorColor(Color.RED);
        //TextView search = binding.title;

        JSInterface jsInterface = new JSInterface();
        WebView pages = binding.pages;
        pages.getSettings().setSupportZoom(true);
        pages.getSettings().setJavaScriptEnabled(true);
        pages.addJavascriptInterface(jsInterface, "Android");
        pages.loadUrl("https://weatherbucket1d.s3.us-east-2.amazonaws.com/spa2.html");


    }



    public class JSInterface{

        @JavascriptInterface
        public void loadPage(){

        }
    }
}