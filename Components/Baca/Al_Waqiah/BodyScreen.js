import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Dimensions, ScrollView} from 'react-native';
import { Content, Text} from "native-base";

export default class BodyScreen extends Component{
  render(){
    return(
      <View style={style.container}>
      <ScrollView style={style.wrepper}>
      <Content style={{backgroundColor: '#F3FEFF' }}>
        <View style={style.bismillah}>
          <Text style={style.innerBismillah}>
            بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِذَا وَقَعَتِ الْوَاقِعَةُ ﴿١﴾
          </Text>
          <Text style={style.innerText}>
            Apabila terjadi hari kiamat,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَيْسَ لِوَقْعَتِهَا كَاذِبَةٌ ﴿٢﴾
          </Text>
          <Text style={style.innerText}>
            tidak seorangpun dapat berdusta tentang kejadiannya.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            خَافِضَةٌ رَّافِعَةٌ ﴿٣﴾
          </Text>
          <Text style={style.innerText}>
            (Kejadian itu) merendahkan (satu golongan) dan meninggikan (golongan yang lain),
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِذَا رُجَّتِ الْأَرْضُ رَجًّا ﴿٤﴾
          </Text>
          <Text style={style.innerText}>
            apabila bumi digoncangkan sedahsyat-dahsyatnya,
          </Text> 
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَبُسَّتِ الْجِبَالُ بَسًّا ﴿٥﴾
          </Text>
          <Text style={style.innerText}>
            dan gunung-gunung dihancur luluhkan seluluh-luluhnya,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَكَانَتْ هَبَاء مُّنبَثًّا ﴿٦﴾
          </Text>
          <Text style={style.innerText}>
            maka jadilah ia debu yang beterbangan,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَكُنتُمْ أَزْوَاجًا ثَلَاثَةً ﴿٧﴾
          </Text>
          <Text style={style.innerText}>
            dan kamu menjadi tiga golongan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَأَصْحَابُ الْمَيْمَنَةِ مَا أَصْحَابُ الْمَيْمَنَةِ ﴿٨﴾
          </Text>
          <Text style={style.innerText}>
            Yaitu golongan kanan. Alangkah mulianya golongan kanan itu.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَأَصْحَابُ الْمَشْأَمَةِ مَا أَصْحَابُ الْمَشْأَمَةِ ﴿٩﴾
          </Text>
          <Text style={style.innerText}>
            Dan golongan kiri. Alangkah sengsaranya golongan kiri itu.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَالسَّابِقُونَ السَّابِقُونَ ﴿١٠﴾
          </Text>
          <Text style={style.innerText}>
            Dan orang-orang yang beriman paling dahulu,
          </Text>
        </View>

        <View style={style.contentA}>
          <Text style={style.arab}>
            أُوْلَئِكَ الْمُقَرَّبُونَ ﴿١١﴾
          </Text>
          <Text style={style.innerText}>
            Mereka itulah yang didekatkan kepada Allah.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِي جَنَّاتِ النَّعِيمِ ﴿١٢﴾
          </Text>
          <Text style={style.innerText}>
            Berada dalam jannah kenikmatan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            ثُلَّةٌ مِّنَ الْأَوَّلِينَ ﴿١٣﴾
          </Text>
          <Text style={style.innerText}>
            Segolongan besar dari orang-orang yang terdahulu,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَقَلِيلٌ مِّنَ الْآخِرِينَ ﴿١٤﴾
          </Text>
          <Text style={style.innerText}>
            dan segolongan kecil dari orang-orang yang kemudian
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            عَلَى سُرُرٍ مَّوْضُونَةٍ ﴿١٥﴾
          </Text>
          <Text style={style.innerText}>
            Mereka berada di atas dipan yang bertahta emas dan permata,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            مُتَّكِئِينَ عَلَيْهَا مُتَقَابِلِينَ ﴿١٦﴾
          </Text>
          <Text style={style.innerText}>
            seraya bertelekan di atasnya berhadap-hadapan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            يَطُوفُ عَلَيْهِمْ وِلْدَانٌ مُّخَلَّدُونَ ﴿١٧﴾
          </Text>
          <Text style={style.innerText}>
            Mereka dikelilingi oleh anak-anak muda yang tetap muda,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            بِأَكْوَابٍ وَأَبَارِيقَ وَكَأْسٍ مِّن مَّعِينٍ ﴿١٨﴾
          </Text>
          <Text style={style.innerText}>
            dengan membawa gelas, cerek dan minuman yang diambil dari air yang mengalir, 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَا يُصَدَّعُونَ عَنْهَا وَلَا يُنزِفُونَ ﴿١٩﴾
          </Text>
          <Text style={style.innerText}>
            mereka tidak pening karenanya dan tidak pula mabuk,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَفَاكِهَةٍ مِّمَّا يَتَخَيَّرُونَ ﴿٢٠﴾
          </Text>
          <Text style={style.innerText}>
            dan buah-buahan dari apa yang mereka pilih,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَلَحْمِ طَيْرٍ مِّمَّا يَشْتَهُونَ ﴿٢١﴾
          </Text>
          <Text style={style.innerText}>
            dan daging burung dari apa yang mereka inginkan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَحُورٌ عِينٌ ﴿٢٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan ada bidadari-bidadari bermata jeli, 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            كَأَمْثَالِ اللُّؤْلُؤِ الْمَكْنُونِ ﴿٢٣﴾
          </Text>
          <Text style={style.innerText}>
            laksana mutiara yang tersimpan baik. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            جَزَاء بِمَا كَانُوا يَعْمَلُونَ ﴿٢٤﴾
          </Text>
          <Text style={style.innerText}>
            Sebagai balasan bagi apa yang telah mereka kerjakan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَا يَسْمَعُونَ فِيهَا لَغْوًا وَلَا تَأْثِيمًا ﴿٢٥﴾
          </Text>
          <Text style={style.innerText}>
            Mereka tidak mendengar di dalamnya perkataan yang sia-sia dan tidak pula perkataan yang menimbulkan dosa,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِلَّا قِيلًا سَلَامًا سَلَامًا ﴿٢٦﴾
          </Text>
          <Text style={style.innerText}>
            akan tetapi mereka mendengar ucapan salam.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَأَصْحَابُ الْيَمِينِ مَا أَصْحَابُ الْيَمِينِ ﴿٢٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan golongan kanan, alangkah bahagianya golongan kanan itu.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِي سِدْرٍ مَّخْضُودٍ ﴿٢٨﴾
          </Text>
          <Text style={style.innerText}>
            Berada di antara pohon bidara yang tak berduri,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَطَلْحٍ مَّنضُودٍ ﴿٢٩﴾
          </Text>
          <Text style={style.innerText}>
            dan pohon pisang yang bersusun-susun (buahnya),
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَظِلٍّ مَّمْدُودٍ ﴿٣٠﴾
          </Text>
          <Text style={style.innerText}>
            dan naungan yang terbentang luas,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَمَاء مَّسْكُوبٍ ﴿٣١﴾
          </Text>
          <Text style={style.innerText}>
            dan air yang tercurah,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَفَاكِهَةٍ كَثِيرَةٍ ﴿٣٢﴾
          </Text>
          <Text style={style.innerText}>
            dan buah-buahan yang banyak,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَّا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ ﴿٣٣﴾
          </Text>
          <Text style={style.innerText}>
            yang tidak berhenti (berbuah) dan tidak terlarang mengambilnya.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَفُرُشٍ مَّرْفُوعَةٍ ﴿٣٤﴾
          </Text>
          <Text style={style.innerText}>
            dan kasur-kasur yang tebal lagi empuk.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّا أَنشَأْنَاهُنَّ إِنشَاء ﴿٣٥﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya Kami menciptakan mereka (bidadari-bidadari) dengan langsung
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَجَعَلْنَاهُنَّ أَبْكَارًا ﴿٣٦﴾
          </Text>
          <Text style={style.innerText}>
            dan Kami jadikan mereka gadis-gadis perawan. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            عُرُبًا أَتْرَابًا ﴿٣٧﴾
          </Text>
          <Text style={style.innerText}>
            penuh cinta lagi sebaya umurnya.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لِّأَصْحَابِ الْيَمِينِ ﴿٣٨﴾
          </Text>
          <Text style={style.innerText}>
            (Kami ciptakan mereka) untuk golongan kanan,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            ثُلَّةٌ مِّنَ الْأَوَّلِينَ ﴿٣٩﴾
          </Text>
          <Text style={style.innerText}>
            (yaitu) segolongan besar dari orang-orang yang terdahulu.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَثُلَّةٌ مِّنَ الْآخِرِينَ ﴿٤٠﴾
          </Text>
          <Text style={style.innerText}>
            dan segolongan besar pula dari orang-orang yang kemudian.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَأَصْحَابُ الشِّمَالِ مَا أَصْحَابُ الشِّمَالِ ﴿٤١﴾
          </Text>
          <Text style={style.innerText}>
            Dan golongan kiri, siapakah golongan kiri itu?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فِي سَمُومٍ وَحَمِيمٍ ﴿٤٢﴾
          </Text>
          <Text style={style.innerText}>
            Dalam (siksaan) angin yang amat panas, dan air panas yang mendidih,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَظِلٍّ مِّن يَحْمُومٍ ﴿٤٣﴾
          </Text>
          <Text style={style.innerText}>
            dan dalam naungan asap yang hitam.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَّا بَارِدٍ وَلَا كَرِيمٍ ﴿٤٤﴾
          </Text>
          <Text style={style.innerText}>
            Tidak sejuk dan tidak menyenangkan.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّهُمْ كَانُوا قَبْلَ ذَلِكَ مُتْرَفِينَ ﴿٤٥﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya mereka sebelum itu hidup bermewahan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَكَانُوا يُصِرُّونَ عَلَى الْحِنثِ الْعَظِيمِ ﴿٤٦﴾
          </Text>
          <Text style={style.innerText}>
            Dan mereka terus-menerus mengerjakan dosa besar.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَكَانُوا يَقُولُونَ أَئِذَا مِتْنَا وَكُنَّا تُرَابًا وَعِظَامًا أَئِنَّا لَمَبْعُوثُونَ ﴿٤٧﴾
          </Text>
          <Text style={style.innerText}>
            Dan mereka selalu mengatakan: "Apakah bila kami mati dan menjadi tanah dan tulang belulang, apakah sesungguhnya kami akan benar-benar dibangkitkan kembali? 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَوَ آبَاؤُنَا الْأَوَّلُونَ ﴿٤٨﴾
          </Text>
          <Text style={style.innerText}>
            apakah bapak-bapak kami yang terdahulu (juga)?"
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            قُلْ إِنَّ الْأَوَّلِينَ وَالْآخِرِينَ ﴿٤٩﴾
          </Text>
          <Text style={style.innerText}>
            Katakanlah: "Sesungguhnya orang-orang yang terdahulu dan orang-orang yang terkemudian,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَمَجْمُوعُونَ إِلَى مِيقَاتِ يَوْمٍ مَّعْلُومٍ ﴿٥٠﴾
          </Text>
          <Text style={style.innerText}>
            benar-benar akan dikumpulkan di waktu tertentu pada hari yang dikenal.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            ثُمَّ إِنَّكُمْ أَيُّهَا الضَّالُّونَ الْمُكَذِّبُونَ ﴿٥١﴾
          </Text>
          <Text style={style.innerText}>
            Kemudian sesungguhnya kamu hai orang-orang yang sesat lagi mendustakan,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَآكِلُونَ مِن شَجَرٍ مِّن زَقُّومٍ ﴿٥٢﴾
          </Text>
          <Text style={style.innerText}>
            benar-benar akan memakan pohon zaqqum,
          </Text>
        </View><View style={style.contentA}>
          <Text style={style.arab}>
            فَمَالِؤُونَ مِنْهَا الْبُطُونَ ﴿٥٣﴾
          </Text>
          <Text style={style.innerText}>
            dan akan memenuhi perutmu dengannya.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَشَارِبُونَ عَلَيْهِ مِنَ الْحَمِيمِ ﴿٥٤﴾
          </Text>
          <Text style={style.innerText}>
            Sesudah itu kamu akan meminum air yang sangat panas.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَشَارِبُونَ شُرْبَ الْهِيمِ ﴿٥٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka kamu minum seperti unta yang sangat haus minum.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            هَذَا نُزُلُهُمْ يَوْمَ الدِّينِ ﴿٥٦﴾
          </Text>
          <Text style={style.innerText}>
            Itulah hidangan untuk mereka pada hari Pembalasan".
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            نَحْنُ خَلَقْنَاكُمْ فَلَوْلَا تُصَدِّقُونَ ﴿٥٧﴾
          </Text>
          <Text style={style.innerText}>
            Kami telah menciptakan kamu, maka mengapa kamu tidak membenarkan?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَفَرَأَيْتُم مَّا تُمْنُونَ ﴿٥٨﴾
          </Text>
          <Text style={style.innerText}>
            Maka terangkanlah kepadaku tentang nutfah yang kamu pancarkan. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَأَنتُمْ تَخْلُقُونَهُ أَمْ نَحْنُ الْخَالِقُونَ ﴿٥٩﴾
          </Text>
          <Text style={style.innerText}>
            Kamukah yang menciptakannya, atau Kamikah yang menciptakannya?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            نَحْنُ قَدَّرْنَا بَيْنَكُمُ الْمَوْتَ وَمَا نَحْنُ بِمَسْبُوقِينَ ﴿٦٠﴾
          </Text>
          <Text style={style.innerText}>
            Kami telah menentukan kematian di antara kamu dan Kami sekali-sekali tidak akan dapat dikalahkan,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            عَلَى أَن نُّبَدِّلَ أَمْثَالَكُمْ وَنُنشِئَكُمْ فِي مَا لَا تَعْلَمُونَ ﴿٦١﴾
          </Text>
          <Text style={style.innerText}>
            untuk menggantikan kamu dengan orang-orang yang seperti kamu (dalam dunia) dan menciptakan kamu kelak (di akhirat) dalam keadaan yang tidak kamu ketahui.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَلَقَدْ عَلِمْتُمُ النَّشْأَةَ الْأُولَى فَلَوْلَا تَذكَّرُونَ ﴿٦٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan Sesungguhnya kamu telah mengetahui penciptaan yang pertama, maka mengapakah kamu tidak mengambil pelajaran (untuk penciptaan yang kedua)? 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَفَرَأَيْتُم مَّا تَحْرُثُونَ ﴿٦٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka terangkanlah kepadaku tentang yang kamu tanam.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَأَنتُمْ تَزْرَعُونَهُ أَمْ نَحْنُ الزَّارِعُونَ ﴿٦٤﴾
          </Text>
          <Text style={style.innerText}>
            Kamukah yang menumbuhkannya atau Kamikah yang menumbuhkannya?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَوْ نَشَاء لَجَعَلْنَاهُ حُطَامًا فَظَلَلْتُمْ تَفَكَّهُونَ ﴿٦٥﴾
          </Text>
          <Text style={style.innerText}>
            Kalau Kami kehendaki, benar-benar Kami jadikan dia hancur dan kering, maka jadilah kamu heran dan tercengang.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            إِنَّا لَمُغْرَمُونَ ﴿٦٦﴾
          </Text>
          <Text style={style.innerText}>
            (Sambil berkata): "Sesungguhnya kami benar-benar menderita kerugian",
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            بَلْ نَحْنُ مَحْرُومُونَ ﴿٦٧﴾
          </Text>
          <Text style={style.innerText}>
            bahkan kami menjadi orang-orang yang tidak mendapat hasil apa-apa. 
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَفَرَأَيْتُمُ الْمَاء الَّذِي تَشْرَبُونَ ﴿٦٨﴾
          </Text>
          <Text style={style.innerText}>
            Maka terangkanlah kepadaku tentang air yang kamu minum. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَأَنتُمْ أَنزَلْتُمُوهُ مِنَ الْمُزْنِ أَمْ نَحْنُ الْمُنزِلُونَ ﴿٦٩﴾
          </Text>
          <Text style={style.innerText}>
            Kamukah yang menurunkannya atau Kamikah yang menurunkannya?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            لَوْ نَشَاء جَعَلْنَاهُ أُجَاجًا فَلَوْلَا تَشْكُرُونَ ﴿٧٠﴾
          </Text>
          <Text style={style.innerText}>
            Kalau Kami kehendaki, niscaya Kami jadikan dia asin, maka mengapakah kamu tidak bersyukur?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَفَرَأَيْتُمُ النَّارَ الَّتِي تُورُونَ ﴿٧١﴾
          </Text>
          <Text style={style.innerText}>
            Maka terangkanlah kepadaku tentang api yang kamu nyalakan (dengan menggosok-gosokkan kayu).
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            أَأَنتُمْ أَنشَأْتُمْ شَجَرَتَهَا أَمْ نَحْنُ الْمُنشِؤُونَ ﴿٧٢﴾
          </Text>
          <Text style={style.innerText}>
            Kamukah yang menjadikan kayu itu atau Kamikah yang menjadikannya?
          </Text> 
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            نَحْنُ جَعَلْنَاهَا تَذْكِرَةً وَمَتَاعًا لِّلْمُقْوِينَ ﴿٧٣﴾
          </Text>
          <Text style={style.innerText}>
            Kami jadikan api itu untuk peringatan dan bahan yang berguna bagi musafir di padang pasir.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ ﴿٧٤﴾
          </Text>
          <Text style={style.innerText}>
            Maka bertasbihlah dengan (menyebut) nama Rabbmu Yang Maha Besar.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَلَا أُقْسِمُ بِمَوَاقِعِ النُّجُومِ ﴿٧٥﴾
          </Text>
          <Text style={style.innerText}>
            Maka Aku bersumpah dengan masa turunnya bagian-bagian Al-Quran.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَإِنَّهُ لَقَسَمٌ لَّوْ تَعْلَمُونَ عَظِيمٌ ﴿٧٦﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya sumpah itu adalah sumpah yang besar kalau kamu mengetahui.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّهُ لَقُرْآنٌ كَرِيمٌ ﴿٧٧﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya Al-Quran ini adalah bacaan yang sangat mulia,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
             فِي كِتَابٍ مَّكْنُونٍ ﴿٧٨﴾
          </Text>
          <Text style={style.innerText}>
            pada kitab yang terpelihara (Lauhul Mahfuzh),
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            لَّا يَمَسُّهُ إِلَّا الْمُطَهَّرُونَ ﴿٧٩﴾
          </Text>
          <Text style={style.innerText}>
            tidak menyentuhnya kecuali orang-orang yang disucikan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            تَنزِيلٌ مِّن رَّبِّ الْعَالَمِينَ ﴿٨٠﴾
          </Text>
          <Text style={style.innerText}>
            Diturunkan dari Rabbil 'alamiin. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            أَفَبِهَذَا الْحَدِيثِ أَنتُم مُّدْهِنُونَ ﴿٨١﴾
          </Text>
          <Text style={style.innerText}>
            Maka apakah kamu menganggap remeh saja Al-Quran ini?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَتَجْعَلُونَ رِزْقَكُمْ أَنَّكُمْ تُكَذِّبُونَ ﴿٨٢﴾
          </Text>
          <Text style={style.innerText}>
            kamu mengganti rezeki (yang Allah berikan) dengan mendustakan Allah.
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَلَوْلَا إِذَا بَلَغَتِ الْحُلْقُومَ ﴿٨٣﴾
          </Text>
          <Text style={style.innerText}>
            Maka mengapa ketika nyawa sampai di kerongkongan,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَأَنتُمْ حِينَئِذٍ تَنظُرُونَ ﴿٨٤﴾
          </Text>
          <Text style={style.innerText}>
            padahal kamu ketika itu melihat, 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنكُمْ وَلَكِن لَّا تُبْصِرُونَ ﴿٨٥﴾
          </Text>
          <Text style={style.innerText}>
            dan Kami lebih dekat kepadanya dari pada kamu. Tetapi kamu tidak melihat,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَلَوْلَا إِن كُنتُمْ غَيْرَ مَدِينِينَ ﴿٨٦﴾
          </Text>
          <Text style={style.innerText}>
            maka mengapa jika kamu tidak dikuasai (oleh Allah)?
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            تَرْجِعُونَهَا إِن كُنتُمْ صَادِقِينَ ﴿٨٧﴾
          </Text>
          <Text style={style.innerText}>
            Kamu tidak mengembalikan nyawa itu (kepada tempatnya) jika kamu adalah orang-orang yang benar?
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَأَمَّا إِن كَانَ مِنَ الْمُقَرَّبِينَ ﴿٨٨﴾
          </Text>
          <Text style={style.innerText}>
            adapun jika dia (orang yang mati) termasuk orang-orang yang didekatkan (kepada Allah),
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَرَوْحٌ وَرَيْحَانٌ وَجَنَّةُ نَعِيمٍ ﴿٨٩﴾
          </Text>
          <Text style={style.innerText}>
            maka dia memperoleh ketenteraman dan rezeki serta jannah kenikmatan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَأَمَّا إِن كَانَ مِنَ أَصْحَابِ الْيَمِينِ ﴿٩٠﴾
          </Text>
          <Text style={style.innerText}>
            Dan adapun jika dia termasuk golongan kanan,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
             فَسَلَامٌ لَّكَ مِنْ أَصْحَابِ الْيَمِينِ ﴿٩١﴾
          </Text>
          <Text style={style.innerText}>
            maka keselamatanlah bagimu karena kamu dari golongan kanan.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَأَمَّا إِن كَانَ مِنَ الْمُكَذِّبِينَ الضَّالِّينَ ﴿٩٢﴾
          </Text>
          <Text style={style.innerText}>
            Dan adapun jika dia termasuk golongan yang mendustakan lagi sesat,
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            فَنُزُلٌ مِّنْ حَمِيمٍ ﴿٩٣﴾
          </Text>
          <Text style={style.innerText}>
            maka dia mendapat hidangan air yang mendidih,
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            وَتَصْلِيَةُ جَحِيمٍ ﴿٩٤﴾
          </Text>
          <Text style={style.innerText}>
            dan dibakar di dalam jahannam. 
          </Text>
        </View>
        <View style={style.contentA}>
          <Text style={style.arab}>
            إِنَّ هَذَا لَهُوَ حَقُّ الْيَقِينِ ﴿٩٥﴾
          </Text>
          <Text style={style.innerText}>
            Sesungguhnya (yang disebutkan ini) adalah suatu keyakinan yang benar.
          </Text>
        </View>
        <View style={style.contentB}>
          <Text style={style.arab}>
            فَسَبِّحْ بِاسْمِ رَبِّكَ الْعَظِيمِ ﴿٩٦﴾
          </Text>
          <Text style={style.innerText}>
            Maka bertasbihlah dengan (menyebut) nama Rabbmu yang Maha Besar.
          </Text>
        </View>
      </Content>
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
