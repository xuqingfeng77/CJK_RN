package com.eposp.cjk_rn;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

public class NativeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_native);
    }
    public void onBtnIntent(View v){
        Intent intent=new Intent(this,MainActivity.class);
        startActivity(intent);


    }
}
