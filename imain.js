function yillar()
{
    var tarih=new Date();
    var yil=tarih.getFullYear();

    for(var i=yil;i>=1950;i--)
    {
        var secenek=document.createElement("option");
        document.getElementById("aracYili").options.add(secenek);
        secenek.value=i;
        secenek.text=i;
    }
}


function vergiHesapla()
{
    var aracTipi,aracGucu,aracYili;
    var odenecekVergi;
    var i;

    //1.döngü bloğu-araç tipi seçimini alma
    for(i=0;i<document.getElementById("aracTipi").length;i++)
    {
        if(document.getElementById("aracTipi").options[i].selected)
        {
            aracTipi=document.getElementById("aracTipi").options[i].value;
        }

        console.log(aracTipi);
    }

        //2.döngü bloğu-araç gücü seçimini alma
        for(i=0;i<document.getElementsByName("motorGucu").length;i++)
        {
            if(document.getElementsByName("motorGucu")[i].checked)
            {
                aracGucu=document.getElementsByName("motorGucu")[i].value;
            }

            console.log(aracGucu);
        }

    //3.döngü bloğu-araç yılını seçimini alma
    for(i=0;i<document.getElementById("aracYili").length;i++)
    {
        if(document.getElementById("aracYili").options[i].selected)
        {
            aracYili=document.getElementById("aracYili").options[i].value;
        }

        console.log(aracTipi);
    }


    //1.kontrol bloğu- araç tipine göre vergi alt sınırını belirleme
    if(aracTipi=="motor")
    {
        odenecekVergi=100;
    }
    else if(aracTipi=="oto")
    {
        odenecekVergi=200;
    }

    //2.kontrol bloğu-araç gücüne göre eklenecek tutarı belirleme
    if(aracGucu=="1000cc-1600cc")
    {
        odenecekVergi=odenecekVergi+50;
    }
    else if(aracGucu=="1601cc-2000cc")
    {
        odenecekVergi=odenecekVergi+100;
    }
    else if(aracGucu=="2001cc")
    {
        odenecekVergi=odenecekVergi+150;
    }

    //3.kontrol bloğu- seçilen yıla göre indirim yapma
    if(aracYili<=2005)
    {
        odenecekVergi=odenecekVergi-25;
    }

    document.getElementById("sonuc").innerHTML="ödenemeniz gereken vergi: "+odenecekVergi;


}

