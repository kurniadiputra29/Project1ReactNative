import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView>
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
                حم ﴿١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                Haa miim.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالْكِتَابِ الْمُبِينِ ﴿٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Demi Kitab (Al Quran) yang menjelaskan,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ ﴿٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                sesungguhnya Kami menurunkannya pada suatu malam yang diberkahi dan sesungguhnya Kami-lah yang memberi peringatan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ ﴿٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Pada malam itu dijelaskan segala urusan yang penuh hikmah,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمْرًا مِّنْ عِندِنَا إِنَّا كُنَّا مُرْسِلِينَ ﴿٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                (yaitu) urusan yang besar dari sisi Kami. Sesungguhnya Kami adalah Yang mengutus rasul-rasul,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                رَحْمَةً مِّن رَّبِّكَ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ ﴿٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                sebagai rahmat dari Tuhanmu. Sesungguhnya Dialah Yang Maha Mendengar lagi Maha Mengetahui,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا إِن كُنتُم مُّوقِنِينَ ﴿٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Tuhan Yang memelihara langit dan bumi dan apa yang ada di antara keduanya, jika kamu adalah orang yang meyakini.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَا إِلَهَ إِلَّا هُوَ يُحْيِي وَيُمِيتُ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ ﴿٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                Tidak ada Tuhan (yang berhak disembah) melainkan Dia, Yang menghidupkan dan Yang mematikan (Dialah) Tuhanmu dan Tuhan bapak-bapakmu yang terdahulu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ ﴿٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Tetapi mereka bermain-main dalam keragu-raguan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاء بِدُخَانٍ مُّبِينٍ ﴿١٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                Maka tunggulah hari ketika langit membawa kabut yang nyata,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَغْشَى النَّاسَ هَذَا عَذَابٌ أَلِيمٌ ﴿١١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                yang meliputi manusia. Inilah azab yang pedih.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                رَبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ ﴿١٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                (Mereka berdoa): "Ya Tuhan kami, lenyapkanlah dari kami azab itu. Sesungguhnya kami akan beriman".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَنَّى لَهُمُ الذِّكْرَى وَقَدْ جَاءهُمْ رَسُولٌ مُّبِينٌ ﴿١٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Bagaimanakah mereka dapat menerima peringatan, padahal telah datang kepada mereka seorang rasul yang memberi penjelasan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ تَوَلَّوْا عَنْهُ وَقَالُوا مُعَلَّمٌ مَّجْنُونٌ ﴿١٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                kemudian mereka berpaling daripadanya dan berkata: "Dia adalah seorang yang menerima ajaran (dari orang lain) lagi pula seorang yang gila".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّا كَاشِفُو الْعَذَابِ قَلِيلًا إِنَّكُمْ عَائِدُونَ ﴿١٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                Sesungguhnya (kalau) Kami akan melenyapkan siksaan itu agak sedikit sesungguhnya kamu akan kembali (ingkar).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                يَوْمَ نَبْطِشُ الْبَطْشَةَ الْكُبْرَى إِنَّا مُنتَقِمُونَ ﴿١٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                (Ingatlah) hari (ketika) Kami menghantam mereka dengan hantaman yang keras. Sesungguhnya Kami adalah Pemberi balasan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ وَجَاءهُمْ رَسُولٌ كَرِيمٌ ﴿١٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                Sesungguhnya sebelum mereka telah Kami uji kaum Fir'aun dan telah datang kepada mereka seorang rasul yang mulia,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                أَنْ أَدُّوا إِلَيَّ عِبَادَ اللَّهِ إِنِّي لَكُمْ رَسُولٌ أَمِينٌ ﴿١٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                (dengan berkata): "Serahkanlah kepadaku hamba-hamba Allah (Bani Israil yang kamu perbudak). Sesungguhnya aku adalah utusan (Allah) yang dipercaya kepadamu,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَأَنْ لَّا تَعْلُوا عَلَى اللَّهِ إِنِّي آتِيكُم بِسُلْطَانٍ مُّبِينٍ ﴿١٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                dan janganlah kamu menyombongkan diri terhadap Allah. Sesungguhnya aku datang kepadamu dengan membawa bukti yang nyata.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِنِّي عُذْتُ بِرَبِّي وَرَبِّكُمْ أَن تَرْجُمُونِ ﴿٢٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                Dan sesungguhnya aku berlindung kepada Tuhanku dan Tuhanmu, dari keinginanmu merajamku,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَإِنْ لَّمْ تُؤْمِنُوا لِي فَاعْتَزِلُونِ ﴿٢١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                dan jika kamu tidak beriman kepadaku maka biarkanlah aku (memimpin Bani Israil)".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَدَعَا رَبَّهُ أَنَّ هَؤُلَاء قَوْمٌ مُّجْرِمُونَ ﴿٢٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Kemudian Musa berdoa kepada Tuhannya: "Sesungguhnya mereka ini adalah kaum yang berdosa (segerakanlah azab kepada mereka)".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَأَسْرِ بِعِبَادِي لَيْلًا إِنَّكُم مُّتَّبَعُونَ ﴿٢٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                (Allah berfirman): "Maka berjalanlah kamu dengan membawa hamba-hamba-Ku pada malam hari, sesungguhnya kamu akan dikejar,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَاتْرُكْ الْبَحْرَ رَهْوًا إِنَّهُمْ جُندٌ مُّغْرَقُونَ ﴿٢٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                dan biarkanlah laut itu tetap terbelah. Sesungguhnya mereka adalah tentara yang akan ditenggelamkan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كَمْ تَرَكُوا مِن جَنَّاتٍ وَعُيُونٍ ﴿٢٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Alangkah banyaknya taman dan mata air yang mereka tinggalkan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ ﴿٢٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                dan kebun-kebun serta tempat-tempat yang indah-indah,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ ﴿٢٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                dan kesenangan-kesenangan yang mereka menikmatinya,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَذَلِكَ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ ﴿٢٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                demikianlah. Dan Kami wariskan semua itu kepada kaum yang lain.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَمَا بَكَتْ عَلَيْهِمُ السَّمَاء وَالْأَرْضُ وَمَا كَانُوا مُنظَرِينَ ﴿٢٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Maka langit dan bumi tidak menangisi mereka dan merekapun tidak diberi tangguh.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَقَدْ نَجَّيْنَا بَنِي إِسْرَائِيلَ مِنَ الْعَذَابِ الْمُهِينِ ﴿٣٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Dan sesungguhnya telah Kami selamatkan Bani Israil dari siksa yang menghinakan,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مِن فِرْعَوْنَ إِنَّهُ كَانَ عَالِيًا مِّنَ الْمُسْرِفِينَ ﴿٣١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>31. </Text>
                dari (azab) Fir'aun. Sesungguhnya dia adalah orang yang sombong, salah seorang dari orang-orang yang melampaui batas.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَقَدِ اخْتَرْنَاهُمْ عَلَى عِلْمٍ عَلَى الْعَالَمِينَ ﴿٣٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>32. </Text>
                Dan sesungguhnya telah Kami pilih mereka dengan pengetahuan (Kami) atas bangsa-bangsa.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَآتَيْنَاهُم مِّنَ الْآيَاتِ مَا فِيهِ بَلَاء مُّبِينٌ ﴿٣٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>33. </Text>
                Dan Kami telah memberikan kepada mereka di antara tanda-tanda kekuasaan (Kami) sesuatu yang di dalamnya terdapat nikmat yang nyata.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ هَؤُلَاء لَيَقُولُونَ ﴿٣٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>34. </Text>
                Sesungguhnya mereka (kaum musyrik) itu benar-benar berkata, 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنْ هِيَ إِلَّا مَوْتَتُنَا الْأُولَى وَمَا نَحْنُ بِمُنشَرِينَ ﴿٣٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>35. </Text>
                "tidak ada kematian selain kematian di dunia ini. Dan kami sekali-kali tidak akan dibangkitkan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَأْتُوا بِآبَائِنَا إِن كُنتُمْ صَادِقِينَ ﴿٣٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>36. </Text>
                maka datangkanlah (kembali) bapak-bapak kami jika kamu memang orang-orang yang benar".
              </Text>
            </View>

            <View style={style.contentA}>
              <Text style={style.arab}>
                أَهُمْ خَيْرٌ أَمْ قَوْمُ تُبَّعٍ وَالَّذِينَ مِن قَبْلِهِمْ أَهْلَكْنَاهُمْ إِنَّهُمْ كَانُوا مُجْرِمِينَ ﴿٣٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>37. </Text>
                Apakah mereka (kaum musyrikin) yang lebih baik ataukah kaum Tubba' dan orang-orang yang sebelum mereka. Kami telah membinasakan mereka karena sesungguhnya mereka adalah orang-orang yang berdosa.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ ﴿٣٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>38. </Text>
                Dan Kami tidak menciptakan langit dan bumi dan apa yang ada antara keduanya dengan bermain-main.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَا خَلَقْنَاهُمَا إِلَّا بِالْحَقِّ وَلَكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ ﴿٣٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>39. </Text>
                Kami tidak menciptakan keduanya melainkan dengan haq, tetapi kebanyakan mereka tidak mengetahui.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ يَوْمَ الْفَصْلِ مِيقَاتُهُمْ أَجْمَعِينَ ﴿٤٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>40. </Text>
                Sesungguhnya hari keputusan (hari kiamat) itu adalah waktu yang dijanjikan bagi mereka semuanya, 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَوْمَ لَا يُغْنِي مَوْلًى عَن مَّوْلًى شَيْئًا وَلَا هُمْ يُنصَرُونَ ﴿٤١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>41. </Text>
                yaitu hari yang seorang karib tidak dapat memberi manfaat kepada karibnya sedikitpun, dan mereka tidak akan mendapat pertolongan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِلَّا مَن رَّحِمَ اللَّهُ إِنَّهُ هُوَ الْعَزِيزُ الرَّحِيمُ ﴿٤٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>42. </Text>
                kecuali orang yang diberi rahmat oleh Allah. Sesungguhnya Dialah Yang Maha Perkasa lagi Maha Penyayang.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّ شَجَرَةَ الزَّقُّومِ ﴿٤٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>43. </Text>
                Sesungguhnya pohon zaqqum itu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                طَعَامُ الْأَثِيمِ ﴿٤٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>44. </Text>
                makanan orang yang banyak berdosa. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ ﴿٤٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>45. </Text>
                (Ia) sebagai kotoran minyak yang mendidih di dalam perut, 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَغَلْيِ الْحَمِيمِ ﴿٤٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>46. </Text>
                seperti mendidihnya air yang amat panas.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                خُذُوهُ فَاعْتِلُوهُ إِلَى سَوَاء الْجَحِيمِ ﴿٤٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>47. </Text>
                Peganglah dia kemudian seretlah dia ke tengah-tengah neraka. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ صُبُّوا فَوْقَ رَأْسِهِ مِنْ عَذَابِ الْحَمِيمِ ﴿٤٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>48. </Text>
                Kemudian tuangkanlah di atas kepalanya siksaan (dari) air yang amat panas.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                ذُقْ إِنَّكَ أَنتَ الْعَزِيزُ الْكَرِيمُ ﴿٤٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>49. </Text>
                Rasakanlah, sesungguhnya kamu orang yang perkasa lagi mulia.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ هَذَا مَا كُنتُم بِهِ تَمْتَرُونَ ﴿٥٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>50. </Text>
                Sesungguhnya ini adalah azab yang dahulu selalu kamu meragu-ragukannya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ ﴿٥١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>51. </Text>
                Sesungguhnya orang-orang yang bertakwa berada dalam tempat yang aman,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِي جَنَّاتٍ وَعُيُونٍ ﴿٥٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>52. </Text>
                (yaitu) di dalam taman-taman dan mata-air-mata-air; 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَقَابِلِينَ ﴿٥٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>53. </Text>
                mereka memakai sutera yang halus dan sutera yang tebal, (duduk) berhadap-hadapan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَذَلِكَ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ ﴿٥٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>54. </Text>
                demikianlah. Dan Kami berikan kepada mereka bidadari.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَدْعُونَ فِيهَا بِكُلِّ فَاكِهَةٍ آمِنِينَ ﴿٥٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>55. </Text>
                Di dalamnya mereka meminta segala macam buah-buahan dengan aman (dari segala kekhawatiran), 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَا يَذُوقُونَ فِيهَا الْمَوْتَ إِلَّا الْمَوْتَةَ الْأُولَى وَوَقَاهُمْ عَذَابَ الْجَحِيمِ ﴿٥٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>56. </Text>
                mereka tidak akan merasakan mati di dalamnya kecuali mati di dunia. Dan Allah memelihara mereka dari azab neraka,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَضْلًا مِّن رَّبِّكَ ذَلِكَ هُوَ الْفَوْزُ الْعَظِيمُ ﴿٥٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>57. </Text>
                sebagai karunia dari Tuhanmu. Yang demikian itu adalah keberuntungan yang besar.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ لَعَلَّهُمْ يَتَذَكَّرُونَ ﴿٥٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>58. </Text>
                Sesungguhnya Kami mudahkan Al Quran itu dengan bahasamu supaya mereka mendapat pelajaran.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَارْتَقِبْ إِنَّهُم مُّرْتَقِبُونَ ﴿٥٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>59. </Text>
                Maka tunggulah; sesungguhnya mereka itu menunggu (pula).
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
                حم ﴿١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَالْكِتَابِ الْمُبِينِ ﴿٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ إِنَّا كُنَّا مُنذِرِينَ ﴿٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ ﴿٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمْرًا مِّنْ عِندِنَا إِنَّا كُنَّا مُرْسِلِينَ ﴿٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                رَحْمَةً مِّن رَّبِّكَ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ ﴿٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                رَبِّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا إِن كُنتُم مُّوقِنِينَ ﴿٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَا إِلَهَ إِلَّا هُوَ يُحْيِي وَيُمِيتُ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ ﴿٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                بَلْ هُمْ فِي شَكٍّ يَلْعَبُونَ ﴿٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَارْتَقِبْ يَوْمَ تَأْتِي السَّمَاء بِدُخَانٍ مُّبِينٍ ﴿١٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَغْشَى النَّاسَ هَذَا عَذَابٌ أَلِيمٌ ﴿١١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                رَبَّنَا اكْشِفْ عَنَّا الْعَذَابَ إِنَّا مُؤْمِنُونَ ﴿١٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَنَّى لَهُمُ الذِّكْرَى وَقَدْ جَاءهُمْ رَسُولٌ مُّبِينٌ ﴿١٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ تَوَلَّوْا عَنْهُ وَقَالُوا مُعَلَّمٌ مَّجْنُونٌ ﴿١٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّا كَاشِفُو الْعَذَابِ قَلِيلًا إِنَّكُمْ عَائِدُونَ ﴿١٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                يَوْمَ نَبْطِشُ الْبَطْشَةَ الْكُبْرَى إِنَّا مُنتَقِمُونَ ﴿١٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَقَدْ فَتَنَّا قَبْلَهُمْ قَوْمَ فِرْعَوْنَ وَجَاءهُمْ رَسُولٌ كَرِيمٌ ﴿١٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                أَنْ أَدُّوا إِلَيَّ عِبَادَ اللَّهِ إِنِّي لَكُمْ رَسُولٌ أَمِينٌ ﴿١٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَأَنْ لَّا تَعْلُوا عَلَى اللَّهِ إِنِّي آتِيكُم بِسُلْطَانٍ مُّبِينٍ ﴿١٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِنِّي عُذْتُ بِرَبِّي وَرَبِّكُمْ أَن تَرْجُمُونِ ﴿٢٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَإِنْ لَّمْ تُؤْمِنُوا لِي فَاعْتَزِلُونِ ﴿٢١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَدَعَا رَبَّهُ أَنَّ هَؤُلَاء قَوْمٌ مُّجْرِمُونَ ﴿٢٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَأَسْرِ بِعِبَادِي لَيْلًا إِنَّكُم مُّتَّبَعُونَ ﴿٢٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَاتْرُكْ الْبَحْرَ رَهْوًا إِنَّهُمْ جُندٌ مُّغْرَقُونَ ﴿٢٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كَمْ تَرَكُوا مِن جَنَّاتٍ وَعُيُونٍ ﴿٢٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَزُرُوعٍ وَمَقَامٍ كَرِيمٍ ﴿٢٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَنَعْمَةٍ كَانُوا فِيهَا فَاكِهِينَ ﴿٢٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَذَلِكَ وَأَوْرَثْنَاهَا قَوْمًا آخَرِينَ ﴿٢٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَمَا بَكَتْ عَلَيْهِمُ السَّمَاء وَالْأَرْضُ وَمَا كَانُوا مُنظَرِينَ ﴿٢٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَقَدْ نَجَّيْنَا بَنِي إِسْرَائِيلَ مِنَ الْعَذَابِ الْمُهِينِ ﴿٣٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مِن فِرْعَوْنَ إِنَّهُ كَانَ عَالِيًا مِّنَ الْمُسْرِفِينَ ﴿٣١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَقَدِ اخْتَرْنَاهُمْ عَلَى عِلْمٍ عَلَى الْعَالَمِينَ ﴿٣٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَآتَيْنَاهُم مِّنَ الْآيَاتِ مَا فِيهِ بَلَاء مُّبِينٌ ﴿٣٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ هَؤُلَاء لَيَقُولُونَ ﴿٣٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنْ هِيَ إِلَّا مَوْتَتُنَا الْأُولَى وَمَا نَحْنُ بِمُنشَرِينَ ﴿٣٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَأْتُوا بِآبَائِنَا إِن كُنتُمْ صَادِقِينَ ﴿٣٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَهُمْ خَيْرٌ أَمْ قَوْمُ تُبَّعٍ وَالَّذِينَ مِن قَبْلِهِمْ أَهْلَكْنَاهُمْ إِنَّهُمْ كَانُوا مُجْرِمِينَ ﴿٣٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ ﴿٣٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَا خَلَقْنَاهُمَا إِلَّا بِالْحَقِّ وَلَكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُونَ ﴿٣٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ يَوْمَ الْفَصْلِ مِيقَاتُهُمْ أَجْمَعِينَ ﴿٤٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَوْمَ لَا يُغْنِي مَوْلًى عَن مَّوْلًى شَيْئًا وَلَا هُمْ يُنصَرُونَ ﴿٤١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِلَّا مَن رَّحِمَ اللَّهُ إِنَّهُ هُوَ الْعَزِيزُ الرَّحِيمُ ﴿٤٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّ شَجَرَةَ الزَّقُّومِ ﴿٤٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                طَعَامُ الْأَثِيمِ ﴿٤٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كَالْمُهْلِ يَغْلِي فِي الْبُطُونِ ﴿٤٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَغَلْيِ الْحَمِيمِ ﴿٤٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                خُذُوهُ فَاعْتِلُوهُ إِلَى سَوَاء الْجَحِيمِ ﴿٤٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ صُبُّوا فَوْقَ رَأْسِهِ مِنْ عَذَابِ الْحَمِيمِ ﴿٤٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                ذُقْ إِنَّكَ أَنتَ الْعَزِيزُ الْكَرِيمُ ﴿٤٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ هَذَا مَا كُنتُم بِهِ تَمْتَرُونَ ﴿٥٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّ الْمُتَّقِينَ فِي مَقَامٍ أَمِينٍ ﴿٥١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فِي جَنَّاتٍ وَعُيُونٍ ﴿٥٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَلْبَسُونَ مِن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَقَابِلِينَ ﴿٥٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                كَذَلِكَ وَزَوَّجْنَاهُم بِحُورٍ عِينٍ ﴿٥٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                يَدْعُونَ فِيهَا بِكُلِّ فَاكِهَةٍ آمِنِينَ ﴿٥٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَا يَذُوقُونَ فِيهَا الْمَوْتَ إِلَّا الْمَوْتَةَ الْأُولَى وَوَقَاهُمْ عَذَابَ الْجَحِيمِ ﴿٥٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَضْلًا مِّن رَّبِّكَ ذَلِكَ هُوَ الْفَوْزُ الْعَظِيمُ ﴿٥٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَإِنَّمَا يَسَّرْنَاهُ بِلِسَانِكَ لَعَلَّهُمْ يَتَذَكَّرُونَ ﴿٥٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَارْتَقِبْ إِنَّهُم مُّرْتَقِبُونَ ﴿٥٩﴾
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
                Haa miim.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                Demi Kitab (Al Quran) yang menjelaskan,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                sesungguhnya Kami menurunkannya pada suatu malam yang diberkahi dan sesungguhnya Kami-lah yang memberi peringatan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Pada malam itu dijelaskan segala urusan yang penuh hikmah,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                (yaitu) urusan yang besar dari sisi Kami. Sesungguhnya Kami adalah Yang mengutus rasul-rasul,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                sebagai rahmat dari Tuhanmu. Sesungguhnya Dialah Yang Maha Mendengar lagi Maha Mengetahui,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Tuhan Yang memelihara langit dan bumi dan apa yang ada di antara keduanya, jika kamu adalah orang yang meyakini.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                Tidak ada Tuhan (yang berhak disembah) melainkan Dia, Yang menghidupkan dan Yang mematikan (Dialah) Tuhanmu dan Tuhan bapak-bapakmu yang terdahulu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Tetapi mereka bermain-main dalam keragu-raguan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                Maka tunggulah hari ketika langit membawa kabut yang nyata,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                yang meliputi manusia. Inilah azab yang pedih.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                (Mereka berdoa): "Ya Tuhan kami, lenyapkanlah dari kami azab itu. Sesungguhnya kami akan beriman".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Bagaimanakah mereka dapat menerima peringatan, padahal telah datang kepada mereka seorang rasul yang memberi penjelasan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                kemudian mereka berpaling daripadanya dan berkata: "Dia adalah seorang yang menerima ajaran (dari orang lain) lagi pula seorang yang gila".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                Sesungguhnya (kalau) Kami akan melenyapkan siksaan itu agak sedikit sesungguhnya kamu akan kembali (ingkar).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                (Ingatlah) hari (ketika) Kami menghantam mereka dengan hantaman yang keras. Sesungguhnya Kami adalah Pemberi balasan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                Sesungguhnya sebelum mereka telah Kami uji kaum Fir'aun dan telah datang kepada mereka seorang rasul yang mulia,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                (dengan berkata): "Serahkanlah kepadaku hamba-hamba Allah (Bani Israil yang kamu perbudak). Sesungguhnya aku adalah utusan (Allah) yang dipercaya kepadamu,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                dan janganlah kamu menyombongkan diri terhadap Allah. Sesungguhnya aku datang kepadamu dengan membawa bukti yang nyata.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                Dan sesungguhnya aku berlindung kepada Tuhanku dan Tuhanmu, dari keinginanmu merajamku,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                dan jika kamu tidak beriman kepadaku maka biarkanlah aku (memimpin Bani Israil)".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Kemudian Musa berdoa kepada Tuhannya: "Sesungguhnya mereka ini adalah kaum yang berdosa (segerakanlah azab kepada mereka)".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                (Allah berfirman): "Maka berjalanlah kamu dengan membawa hamba-hamba-Ku pada malam hari, sesungguhnya kamu akan dikejar,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                dan biarkanlah laut itu tetap terbelah. Sesungguhnya mereka adalah tentara yang akan ditenggelamkan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Alangkah banyaknya taman dan mata air yang mereka tinggalkan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                dan kebun-kebun serta tempat-tempat yang indah-indah,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                dan kesenangan-kesenangan yang mereka menikmatinya,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                demikianlah. Dan Kami wariskan semua itu kepada kaum yang lain.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Maka langit dan bumi tidak menangisi mereka dan merekapun tidak diberi tangguh.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Dan sesungguhnya telah Kami selamatkan Bani Israil dari siksa yang menghinakan,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>31. </Text>
                dari (azab) Fir'aun. Sesungguhnya dia adalah orang yang sombong, salah seorang dari orang-orang yang melampaui batas.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>32. </Text>
                Dan sesungguhnya telah Kami pilih mereka dengan pengetahuan (Kami) atas bangsa-bangsa.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>33. </Text>
                Dan Kami telah memberikan kepada mereka di antara tanda-tanda kekuasaan (Kami) sesuatu yang di dalamnya terdapat nikmat yang nyata.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>34. </Text>
                Sesungguhnya mereka (kaum musyrik) itu benar-benar berkata, 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>35. </Text>
                "tidak ada kematian selain kematian di dunia ini. Dan kami sekali-kali tidak akan dibangkitkan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>36. </Text>
                maka datangkanlah (kembali) bapak-bapak kami jika kamu memang orang-orang yang benar".
              </Text>
            </View>

            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>37. </Text>
                Apakah mereka (kaum musyrikin) yang lebih baik ataukah kaum Tubba' dan orang-orang yang sebelum mereka. Kami telah membinasakan mereka karena sesungguhnya mereka adalah orang-orang yang berdosa.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>38. </Text>
                Dan Kami tidak menciptakan langit dan bumi dan apa yang ada antara keduanya dengan bermain-main.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>39. </Text>
                Kami tidak menciptakan keduanya melainkan dengan haq, tetapi kebanyakan mereka tidak mengetahui.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>40. </Text>
                Sesungguhnya hari keputusan (hari kiamat) itu adalah waktu yang dijanjikan bagi mereka semuanya, 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>41. </Text>
                yaitu hari yang seorang karib tidak dapat memberi manfaat kepada karibnya sedikitpun, dan mereka tidak akan mendapat pertolongan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>42. </Text>
                kecuali orang yang diberi rahmat oleh Allah. Sesungguhnya Dialah Yang Maha Perkasa lagi Maha Penyayang.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>43. </Text>
                Sesungguhnya pohon zaqqum itu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>44. </Text>
                makanan orang yang banyak berdosa. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>45. </Text>
                (Ia) sebagai kotoran minyak yang mendidih di dalam perut, 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>46. </Text>
                seperti mendidihnya air yang amat panas.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>47. </Text>
                Peganglah dia kemudian seretlah dia ke tengah-tengah neraka. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>48. </Text>
                Kemudian tuangkanlah di atas kepalanya siksaan (dari) air yang amat panas.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>49. </Text>
                Rasakanlah, sesungguhnya kamu orang yang perkasa lagi mulia.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>50. </Text>
                Sesungguhnya ini adalah azab yang dahulu selalu kamu meragu-ragukannya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>51. </Text>
                Sesungguhnya orang-orang yang bertakwa berada dalam tempat yang aman,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>52. </Text>
                (yaitu) di dalam taman-taman dan mata-air-mata-air; 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>53. </Text>
                mereka memakai sutera yang halus dan sutera yang tebal, (duduk) berhadap-hadapan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>54. </Text>
                demikianlah. Dan Kami berikan kepada mereka bidadari.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>55. </Text>
                Di dalamnya mereka meminta segala macam buah-buahan dengan aman (dari segala kekhawatiran), 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>56. </Text>
                mereka tidak akan merasakan mati di dalamnya kecuali mati di dunia. Dan Allah memelihara mereka dari azab neraka,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>57. </Text>
                sebagai karunia dari Tuhanmu. Yang demikian itu adalah keberuntungan yang besar.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>58. </Text>
                Sesungguhnya Kami mudahkan Al Quran itu dengan bahasamu supaya mereka mendapat pelajaran.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>59. </Text>
                Maka tunggulah; sesungguhnya mereka itu menunggu (pula).
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
    flex: 1,
    backgroundColor: '#FFF',
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
