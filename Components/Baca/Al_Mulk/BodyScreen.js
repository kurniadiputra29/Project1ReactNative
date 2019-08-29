import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>

      { this.props.destop == 'Ayat_Arti'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                 تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                Mahsa Suci Allah Yang di tangan-Nya-lah segala kerajaan, dan Dia Maha Kuasa atas segala sesuatu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Yang menjadikan mati dan hidup, supaya Dia menguji kamu, siapa di antara kamu yang lebih baik amalnya. Dan Dia Maha Perkasa lagi Maha Pengampun
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَّا تَرَى فِي خَلْقِ الرَّحْمَنِ مِن تَفَاوُتٍ فَارْجِعِ الْبَصَرَ هَلْ تَرَى مِن فُطُورٍ ﴿٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                Yang telah menciptakan tujuh langit berlapis-lapis. Kamu sekali-kali tidak melihat pada ciptaan Tuhan Yang Maha Pemurah sesuatu yang tidak seimbang. Maka lihatlah berulang-ulang, adakah kamu lihat sesuatu yang tidak seimbang?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِأً وَهُوَ حَسِيرٌ ﴿٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Kemudian pandanglah sekali lagi niscaya penglihatanmu akan kembali kepadamu dengan tidak menemukan sesuatu cacat dan penglihatanmu itupun dalam keadaan payah.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَقَدْ زَيَّنَّا السَّمَاء الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ ﴿٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                Sesungguhnya Kami telah menghiasi langit yang dekat dengan bintang-bintang, dan Kami jadikan bintang-bintang itu alat-alat pelempar syaitan, dan Kami sediakan bagi mereka siksa neraka yang menyala-nyala.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ وَبِئْسَ الْمَصِيرُ ﴿٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                Dan orang-orang yang kafir kepada Tuhannya, memperoleh azab Jahannam. Dan itulah seburuk-buruk tempat kembali.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ ﴿٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Apabila mereka dilemparkan ke dalamnya mereka mendengar suara neraka yang mengerikan, sedang neraka itu menggelegak,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ ﴿٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                hampir-hampir (neraka) itu terpecah-pecah lantaran marah. Setiap kali dilemparkan ke dalamnya sekumpulan (orang-orang kafir), penjaga-penjaga (neraka itu) bertanya kepada mereka: "Apakah belum pernah datang kepada kamu (di dunia) seorang pemberi peringatan?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالُوا بَلَى قَدْ جَاءنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ ﴿٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Mereka menjawab: "Benar ada", sesungguhnya telah datang kepada kami seorang pemberi peringatan, maka kami mendustakan(nya) dan kami katakan: "Allah tidak menurunkan sesuatupun; kamu tidak lain hanyalah di dalam kesesatan yang besar".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ ﴿١٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                Dan mereka berkata: "Sekiranya kami mendengarkan atau memikirkan (peringatan itu) niscaya tidaklah kami termasuk penghuni-penghuni neraka yang menyala-nyala". 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ ﴿١١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                Mereka mengakui dosa mereka. Maka kebinasaanlah bagi penghuni-penghuni neraka yang menyala-nyala.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ ﴿١٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                Sesungguhnya orang-orang yang takut kepada Tuhannya Yang tidak nampak oleh mereka, mereka akan memperoleh ampunan dan pahala yang besar.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ ﴿١٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Dan rahasiakanlah perkataanmu atau lahirkanlah; sesungguhnya Dia Maha Mengetahui segala isi hati.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ ﴿١٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                Apakah Allah Yang menciptakan itu tidak mengetahui (yang kamu lahirkan atau rahasiakan); dan Dia Maha Halus lagi Maha Mengetahui?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ وَإِلَيْهِ النُّشُورُ ﴿١٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                Dialah Yang menjadikan bumi itu mudah bagi kamu, maka berjalanlah di segala penjurunya dan makanlah sebahagian dari rezeki-Nya. Dan hanya kepada-Nya-lah kamu (kembali setelah) dibangkitkan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَأَمِنتُم مَّن فِي السَّمَاء أَن يَخْسِفَ بِكُمُ الأَرْضَ فَإِذَا هِيَ تَمُورُ ﴿١٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                Apakah kamu merasa aman terhadap Allah yang (berkuasa) di langit bahwa Dia akan menjungkir balikkan bumi bersama kamu, sehingga dengan tiba-tiba bumi itu bergoncang?,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمْ أَمِنتُم مَّن فِي السَّمَاء أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ ﴿١٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                atau apakah kamu merasa aman terhadap Allah yang (berkuasa) di langit bahwa Dia akan mengirimkan badai yang berbatu. Maka kelak kamu akan mengetahui bagaimana (akibat mendustakan) peringatan-Ku?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ ﴿١٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                Dan sesungguhnya orang-orang yang sebelum mereka telah mendustakan (rasul-rasul-Nya). Maka alangkah hebatnya kemurkaan-Ku.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَنُ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ ﴿١٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                Dan apakah mereka tidak memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pemurah. Sesungguhnya Dia Maha Melihat segala sesuatu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَمَّنْ هَذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمَنِ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ ﴿٢٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                Atau siapakah dia yang menjadi tentara bagimu yang akan menolongmu selain daripada Allah Yang Maha Pemurah? Orang-orang kafir itu tidak lain hanyalah dalam (keadaan) tertipu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمَّنْ هَذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ بَل لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ ﴿٢١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                Atau siapakah dia yang memberi kamu rezeki jika Allah menahan rezeki-Nya? Sebenarnya mereka terus menerus dalam kesombongan dan menjauhkan diri?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَفَمَن يَمْشِي مُكِبًّا عَلَى وَجْهِهِ أَهْدَى أَمَّن يَمْشِي سَوِيًّا عَلَى صِرَاطٍ مُّسْتَقِيمٍ ﴿٢٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Maka apakah orang yang berjalan terjungkal di atas mukanya itu lebih banyak mendapatkan petunjuk ataukah orang yang berjalan tegap di atas jalan yang lurus?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ قَلِيلًا مَّا تَشْكُرُونَ ﴿٢٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                Katakanlah: "Dialah Yang menciptakan kamu dan menjadikan bagi kamu pendengaran, penglihatan dan hati". (Tetapi) amat sedikit kamu bersyukur.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ ﴿٢٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                Katakanlah: "Dialah Yang menjadikan kamu berkembang biak di muka bumi, dan hanya kepada-Nya-lah kamu kelak dikumpulkan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَقُولُونَ مَتَى هَذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ ﴿٢٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Dan mereka berkata: "Kapankah datangnya ancaman itu jika kamu adalah orang-orang yang benar?"
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ ﴿٢٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                Katakanlah: "Sesungguhnya ilmu (tentang hari kiamat itu) hanya pada sisi Allah. Dan sesungguhnya aku hanyalah seorang pemberi peringatan yang menjelaskan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ ﴿٢٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                Ketika mereka melihat azab (pada hari kiamat) sudah dekat, muka orang-orang kafir itu menjadi muram. Dan dikatakan (kepada mereka) inilah (azab) yang dahulunya kamu selalu meminta-mintanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ ﴿٢٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                Katakanlah: "Terangkanlah kepadaku jika Allah mematikan aku dan orang-orang yang bersama dengan aku atau memberi rahmat kepada kami, (maka kami akan masuk surga), tetapi siapakah yang dapat melindungi orang-orang yang kafir dari siksa yang pedih?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هُوَ الرَّحْمَنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ ﴿٢٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Katakanlah: "Dialah Allah Yang Maha Penyayang kami beriman kepada-Nya dan kepada-Nya-lah kami bertawakkal. Kelak kamu akan mengetahui siapakah yang berada dalam kesesatan yang nyata".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاء مَّعِينٍ ﴿٣٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Katakanlah: "Terangkanlah kepadaku jika sumber air kamu menjadi kering; maka siapakah yang akan mendatangkan air yang mengalir bagimu?". 
              </Text>
            </View>
          </Content>
        )
        :null
      }
      { this.props.destop == 'Ayat'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                 تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ﴿١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا وَهُوَ الْعَزِيزُ الْغَفُورُ ﴿٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَّا تَرَى فِي خَلْقِ الرَّحْمَنِ مِن تَفَاوُتٍ فَارْجِعِ الْبَصَرَ هَلْ تَرَى مِن فُطُورٍ ﴿٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِأً وَهُوَ حَسِيرٌ ﴿٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَقَدْ زَيَّنَّا السَّمَاء الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ ﴿٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ وَبِئْسَ الْمَصِيرُ ﴿٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ ﴿٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ ﴿٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالُوا بَلَى قَدْ جَاءنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلَّا فِي ضَلَالٍ كَبِيرٍ ﴿٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ ﴿١٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ ﴿١١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ ﴿١٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ ﴿١٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَلَا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ ﴿١٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ وَإِلَيْهِ النُّشُورُ ﴿١٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَأَمِنتُم مَّن فِي السَّمَاء أَن يَخْسِفَ بِكُمُ الأَرْضَ فَإِذَا هِيَ تَمُورُ ﴿١٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمْ أَمِنتُم مَّن فِي السَّمَاء أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ ﴿١٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ ﴿١٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَنُ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ ﴿١٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَمَّنْ هَذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمَنِ إِنِ الْكَافِرُونَ إِلَّا فِي غُرُورٍ ﴿٢٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمَّنْ هَذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ بَل لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ ﴿٢١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               أَفَمَن يَمْشِي مُكِبًّا عَلَى وَجْهِهِ أَهْدَى أَمَّن يَمْشِي سَوِيًّا عَلَى صِرَاطٍ مُّسْتَقِيمٍ ﴿٢٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ قَلِيلًا مَّا تَشْكُرُونَ ﴿٢٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ وَإِلَيْهِ تُحْشَرُونَ ﴿٢٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَقُولُونَ مَتَى هَذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ ﴿٢٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ ﴿٢٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ ﴿٢٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ ﴿٢٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هُوَ الرَّحْمَنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلَالٍ مُّبِينٍ ﴿٢٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
               قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاء مَّعِينٍ ﴿٣٠﴾
              </Text>
            </View>
          </Content>
        )
        :null
      }
      { this.props.destop == 'Arti'
        ?(
          <Content style={{backgroundColor: '#F3FEFF' }}>
            <View style={style.bismillah}>
              <Text style={style.innerBismillah}>
                بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                Mahsa Suci Allah Yang di tangan-Nya-lah segala kerajaan, dan Dia Maha Kuasa atas segala sesuatu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Yang menjadikan mati dan hidup, supaya Dia menguji kamu, siapa di antara kamu yang lebih baik amalnya. Dan Dia Maha Perkasa lagi Maha Pengampun
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                Yang telah menciptakan tujuh langit berlapis-lapis. Kamu sekali-kali tidak melihat pada ciptaan Tuhan Yang Maha Pemurah sesuatu yang tidak seimbang. Maka lihatlah berulang-ulang, adakah kamu lihat sesuatu yang tidak seimbang?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Kemudian pandanglah sekali lagi niscaya penglihatanmu akan kembali kepadamu dengan tidak menemukan sesuatu cacat dan penglihatanmu itupun dalam keadaan payah.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                Sesungguhnya Kami telah menghiasi langit yang dekat dengan bintang-bintang, dan Kami jadikan bintang-bintang itu alat-alat pelempar syaitan, dan Kami sediakan bagi mereka siksa neraka yang menyala-nyala.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                Dan orang-orang yang kafir kepada Tuhannya, memperoleh azab Jahannam. Dan itulah seburuk-buruk tempat kembali.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Apabila mereka dilemparkan ke dalamnya mereka mendengar suara neraka yang mengerikan, sedang neraka itu menggelegak,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                hampir-hampir (neraka) itu terpecah-pecah lantaran marah. Setiap kali dilemparkan ke dalamnya sekumpulan (orang-orang kafir), penjaga-penjaga (neraka itu) bertanya kepada mereka: "Apakah belum pernah datang kepada kamu (di dunia) seorang pemberi peringatan?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Mereka menjawab: "Benar ada", sesungguhnya telah datang kepada kami seorang pemberi peringatan, maka kami mendustakan(nya) dan kami katakan: "Allah tidak menurunkan sesuatupun; kamu tidak lain hanyalah di dalam kesesatan yang besar".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                Dan mereka berkata: "Sekiranya kami mendengarkan atau memikirkan (peringatan itu) niscaya tidaklah kami termasuk penghuni-penghuni neraka yang menyala-nyala". 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                Mereka mengakui dosa mereka. Maka kebinasaanlah bagi penghuni-penghuni neraka yang menyala-nyala.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                Sesungguhnya orang-orang yang takut kepada Tuhannya Yang tidak nampak oleh mereka, mereka akan memperoleh ampunan dan pahala yang besar.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Dan rahasiakanlah perkataanmu atau lahirkanlah; sesungguhnya Dia Maha Mengetahui segala isi hati.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                Apakah Allah Yang menciptakan itu tidak mengetahui (yang kamu lahirkan atau rahasiakan); dan Dia Maha Halus lagi Maha Mengetahui?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                Dialah Yang menjadikan bumi itu mudah bagi kamu, maka berjalanlah di segala penjurunya dan makanlah sebahagian dari rezeki-Nya. Dan hanya kepada-Nya-lah kamu (kembali setelah) dibangkitkan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                Apakah kamu merasa aman terhadap Allah yang (berkuasa) di langit bahwa Dia akan menjungkir balikkan bumi bersama kamu, sehingga dengan tiba-tiba bumi itu bergoncang?,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                atau apakah kamu merasa aman terhadap Allah yang (berkuasa) di langit bahwa Dia akan mengirimkan badai yang berbatu. Maka kelak kamu akan mengetahui bagaimana (akibat mendustakan) peringatan-Ku?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                Dan sesungguhnya orang-orang yang sebelum mereka telah mendustakan (rasul-rasul-Nya). Maka alangkah hebatnya kemurkaan-Ku.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                Dan apakah mereka tidak memperhatikan burung-burung yang mengembangkan dan mengatupkan sayapnya di atas mereka? Tidak ada yang menahannya (di udara) selain Yang Maha Pemurah. Sesungguhnya Dia Maha Melihat segala sesuatu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                Atau siapakah dia yang menjadi tentara bagimu yang akan menolongmu selain daripada Allah Yang Maha Pemurah? Orang-orang kafir itu tidak lain hanyalah dalam (keadaan) tertipu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                Atau siapakah dia yang memberi kamu rezeki jika Allah menahan rezeki-Nya? Sebenarnya mereka terus menerus dalam kesombongan dan menjauhkan diri?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Maka apakah orang yang berjalan terjungkal di atas mukanya itu lebih banyak mendapatkan petunjuk ataukah orang yang berjalan tegap di atas jalan yang lurus?
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                Katakanlah: "Dialah Yang menciptakan kamu dan menjadikan bagi kamu pendengaran, penglihatan dan hati". (Tetapi) amat sedikit kamu bersyukur.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                Katakanlah: "Dialah Yang menjadikan kamu berkembang biak di muka bumi, dan hanya kepada-Nya-lah kamu kelak dikumpulkan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Dan mereka berkata: "Kapankah datangnya ancaman itu jika kamu adalah orang-orang yang benar?"
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                Katakanlah: "Sesungguhnya ilmu (tentang hari kiamat itu) hanya pada sisi Allah. Dan sesungguhnya aku hanyalah seorang pemberi peringatan yang menjelaskan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                Ketika mereka melihat azab (pada hari kiamat) sudah dekat, muka orang-orang kafir itu menjadi muram. Dan dikatakan (kepada mereka) inilah (azab) yang dahulunya kamu selalu meminta-mintanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                Katakanlah: "Terangkanlah kepadaku jika Allah mematikan aku dan orang-orang yang bersama dengan aku atau memberi rahmat kepada kami, (maka kami akan masuk surga), tetapi siapakah yang dapat melindungi orang-orang yang kafir dari siksa yang pedih?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Katakanlah: "Dialah Allah Yang Maha Penyayang kami beriman kepada-Nya dan kepada-Nya-lah kami bertawakkal. Kelak kamu akan mengetahui siapakah yang berada dalam kesesatan yang nyata".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Katakanlah: "Terangkanlah kepadaku jika sumber air kamu menjadi kering; maka siapakah yang akan mendatangkan air yang mengalir bagimu?". 
              </Text>
            </View>
          </Content>
        )
        :null
      }

      </ScrollView>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
    width: Dimensions.get('window').width,
    backgroundColor: '#FFF',
    flex: 1,
  },
  wrepper:{
    paddingBottom: 20,
  },
  bismillah:{
    backgroundColor: '#D3EDEF',
    padding: 15,
  },
  innerBismillah:{
    textAlign: 'center',
    fontSize: 21,
  },
  contentA:{
    paddingLeft: 20,
    paddingRight: 20,
  },
  contentB:{
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#E5F8F9'
  },
  arab:{
    fontSize: 21,
    marginBottom: 10,
    marginTop: 20,
  },
  innerText:{
    marginBottom: 20,
    marginTop: 10,
    fontSize: 14,
    color: '#262626',
  },
})
