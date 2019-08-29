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
                الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَى عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجَا ﴿١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>1. </Text>
                Segala puji bagi Allah yang telah menurunkan kepada hamba-Nya Al Kitab (Al-Quran) dan Dia tidak mengadakan kebengkokan di dalamnya;
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا ﴿٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                sebagai bimbingan yang lurus, untuk memperingatkan siksaan yang sangat pedih dari sisi Allah dan memberi berita gembira kepada orang-orang yang beriman, yang mengerjakan amal saleh, bahwa mereka akan mendapat pembalasan yang baik,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَاكِثِينَ فِيهِ أَبَدًا ﴿٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                mereka kekal di dalamnya untuk selama-lamanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَيُنذِرَ الَّذِينَ قَالُوا اتَّخَذَ اللَّهُ وَلَدًا ﴿٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Dan untuk memperingatkan kepada orang-orang yang berkata: "Allah mengambil seorang anak".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَّا لَهُم بِهِ مِنْ عِلْمٍ وَلَا لِآبَائِهِمْ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ إِن يَقُولُونَ إِلَّا كَذِبًا ﴿٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                Mereka sekali-kali tidak mempunyai pengetahuan tentang hal itu, begitu pula nenek moyang mereka. Alangkah buruknya kata-kata yang keluar dari mulut mereka; mereka tidak mengatakan (sesuatu) kecuali dusta.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَلَعَلَّكَ بَاخِعٌ نَّفْسَكَ عَلَى آثَارِهِمْ إِن لَّمْ يُؤْمِنُوا بِهَذَا الْحَدِيثِ أَسَفًا ﴿٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                Maka (apakah) barangkali kamu akan membunuh dirimu karena bersedih hati setelah mereka berpaling, sekiranya mereka tidak beriman kepada keterangan ini (Al-Quran).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا ﴿٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Sesungguhnya Kami telah menjadikan apa yang di bumi sebagai perhiasan baginya, agar Kami menguji mereka siapakah di antara mereka yang terbaik perbuatannya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا ﴿٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                Dan sesungguhnya Kami benar-benar akan menjadikan (pula) apa yang di atasnya menjadi tanah rata lagi tandus.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا ﴿٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Atau kamu mengira bahwa orang-orang yang mendiami gua dan (yang mempunyai) raqim itu, mereka termasuk tanda-tanda kekuasaan Kami yang mengherankan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا ﴿١٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                (Ingatlah) tatkala para pemuda itu mencari tempat berlindung ke dalam gua, lalu mereka berdoa: "Wahai Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah bagi kami petunjuk yang lurus dalam urusan kami (ini)".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَضَرَبْنَا عَلَى آذَانِهِمْ فِي الْكَهْفِ سِنِينَ عَدَدًا ﴿١١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                Maka Kami tutup telinga mereka beberapa tahun dalam gua itu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ بَعَثْنَاهُمْ لِنَعْلَمَ أَيُّ الْحِزْبَيْنِ أَحْصَى لِمَا لَبِثُوا أَمَدًا ﴿١٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                Kemudian Kami bangunkan mereka, agar Kami mengetahui manakah di antara kedua golongan itu] yang lebih tepat dalam menghitung berapa lama mereka tinggal (dalam gua itu).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِالْحَقِّ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى ﴿١٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Kami kisahkan kepadamu (Muhammad) cerita ini dengan benar. Sesungguhnya mereka adalah pemuda-pemuda yang beriman kepada Tuhan mereka, dan Kami tambah pula untuk mereka petunjuk.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَرَبَطْنَا عَلَى قُلُوبِهِمْ إِذْ قَامُوا فَقَالُوا رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ لَن نَّدْعُوَ مِن دُونِهِ إِلَهًا لَقَدْ قُلْنَا إِذًا شَطَطًا ﴿١٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                Dan Kami meneguhkan hati mereka diwaktu mereka berdiri, lalu mereka pun berkata, "Tuhan kami adalah Tuhan seluruh langit dan bumi; kami sekali-kali tidak menyeru Tuhan selain Dia, sesungguhnya kami kalau demikian telah mengucapkan perkataan yang amat jauh dari kebenaran".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                هَؤُلَاء قَوْمُنَا اتَّخَذُوا مِن دُونِهِ آلِهَةً لَّوْلَا يَأْتُونَ عَلَيْهِم بِسُلْطَانٍ بَيِّنٍ فَمَنْ أَظْلَمُ مِمَّنِ افْتَرَى عَلَى اللَّهِ كَذِبًا ﴿١٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                Kaum kami ini telah menjadikan selain Dia sebagai tuhan-tuhan (untuk disembah). Mengapa mereka tidak mengemukakan alasan yang terang (tentang kepercayaan mereka)? Siapakah yang lebih zalim daripada orang-orang yang mengada-adakan kebohongan terhadap Allah?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِذِ اعْتَزَلْتُمُوهُمْ وَمَا يَعْبُدُونَ إِلَّا اللَّهَ فَأْوُوا إِلَى الْكَهْفِ يَنشُرْ لَكُمْ رَبُّكُم مِّن رَّحمته ويُهَيِّئْ لَكُم مِّنْ أَمْرِكُم مِّرْفَقًا ﴿١٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                Dan apabila kamu meninggalkan mereka dan apa yang mereka sembah selain Allah, maka carilah tempat berlindung ke dalam gua itu, niscaya Tuhanmu akan melimpahkan sebagian rahmat-Nya kepadamu dan menyediakan sesuatu yang berguna bagimu dalam urusan kamu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَتَرَى الشَّمْسَ إِذَا طَلَعَت تَّزَاوَرُ عَن كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَت تَّقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ مِّنْهُ ذَلِكَ مِنْ آيَاتِ اللَّهِ مَن يَهْدِ اللَّهُ فَهُوَ الْمُهْتَدِي وَمَن يُضْلِلْ فَلَن تَجِدَ لَهُ وَلِيًّا مُّرْشِدًا ﴿١٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                Dan kamu akan melihat matahari ketika terbit, condong dari gua mereka ke sebelah kanan, dan bila matahari terbenam menjauhi mereka ke sebelah kiri sedang mereka berada dalam tempat yang luas dalam gua itu. Itu adalah sebagian dari tanda-tanda (kebesaran) Allah. Barangsiapa yang diberi petunjuk oleh Allah, maka dialah yang mendapat petunjuk; dan barangsiapa yang disesatkan-Nya, maka kamu tidak akan mendapatkan seorang pemimpinpun yang dapat memberi petunjuk kepadanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ وَنُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ لَوِ اطَّلَعْتَ عَلَيْهِمْ لَوَلَّيْتَ مِنْهُمْ فِرَارًا وَلَمُلِئْتَ مِنْهُمْ رُعْبًا ﴿١٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                Dan kamu mengira mereka itu bangun, padahal mereka tidur; Dan kami balik-balikkan mereka ke kanan dan ke kiri, sedang anjing mereka mengunjurkan kedua lengannya di muka pintu gua. Dan jika kamu menyaksikan mereka tentulah kamu akan berpaling dari mereka dengan melarikan diri dan tentulah (hati) kamu akan dipenuhi oleh ketakutan terhadap mereka.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَكَذَلِكَ بَعَثْنَاهُمْ لِيَتَسَاءلُوا بَيْنَهُمْ قَالَ قَائِلٌ مِّنْهُمْ كَمْ لَبِثْتُمْ قَالُوا لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍ قَالُوا رَبُّكُمْ أَعْلَمُ بِمَا لَبِثْتُمْ فَابْعَثُوا أَحَدَكُم بِوَرِقِكُمْ هَذِهِ إِلَى الْمَدِينَةِ فَلْيَنظُرْ أَيُّهَا أَزْكَى طَعَامًا فَلْيَأْتِكُم بِرِزْقٍ مِّنْهُ وَلْيَتَلَطَّفْ وَلَا يُشْعِرَنَّ بِكُمْ أَحَدًا ﴿١٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                Dan demikianlah Kami bangunkan mereka agar mereka saling bertanya di antara mereka sendiri. Berkatalah salah seorang di antara mereka: Sudah berapa lamakah kamu berada (disini?)". Mereka menjawab: "Kita berada (disini) sehari atau setengah hari". Berkata (yang lain lagi): "Tuhan kamu lebih mengetahui berapa lamanya kamu berada (di sini). Maka suruhlah salah seorang di antara kamu untuk pergi ke kota dengan membawa uang perakmu ini, dan hendaklah dia lihat manakah makanan yang lebih baik, maka hendaklah ia membawa makanan itu untukmu, dan hendaklah ia berlaku lemah-lembut dan janganlah sekali-kali menceritakan halmu kepada seorangpun.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّهُمْ إِن يَظْهَرُوا عَلَيْكُمْ يَرْجُمُوكُمْ أَوْ يُعِيدُوكُمْ فِي مِلَّتِهِمْ وَلَن تُفْلِحُوا إِذًا أَبَدًا ﴿٢٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                Sesungguhnya jika mereka dapat mengetahui tempatmu, niscaya mereka akan melempar kamu dengan batu, atau memaksamu kembali kepada agama mereka, dan jika demikian niscaya kamu tidak akan beruntung selama lamanya".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَكَذَلِكَ أَعْثَرْنَا عَلَيْهِمْ لِيَعْلَمُوا أَنَّ وَعْدَ اللَّهِ حَقٌّ وَأَنَّ السَّاعَةَ لَا رَيْبَ فِيهَا إِذْ يَتَنَازَعُونَ بَيْنَهُمْ أَمْرَهُمْ فَقَالُوا ابْنُوا عَلَيْهِم بُنْيَانًا رَّبُّهُمْ أَعْلَمُ بِهِمْ قَالَ الَّذِينَ غَلَبُوا عَلَى أَمْرِهِمْ لَنَتَّخِذَنَّ عَلَيْهِم مَّسْجِدًا ﴿٢١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                Dan demikian (pula) Kami mempertemukan (manusia) dengan mereka, agar manusia itu mengetahui, bahwa janji Allah itu benar, dan bahwa kedatangan hari kiamat tidak ada keraguan padanya. Ketika orang-orang itu berselisih tentang urusan mereka, orang-orang itu berkata: "Dirikan sebuah bangunan di atas (gua) mereka, Tuhan mereka lebih mengetahui tentang mereka". Orang-orang yang berkuasa atas urusan mereka berkata: "Sesungguhnya kami akan mendirikan sebuah rumah peribadatan di atasnya".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                سَيَقُولُونَ ثَلَاثَةٌ رَّابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ رَجْمًا بِالْغَيْبِ وَيَقُولُونَ سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ قُل رَّبِّي أَعْلَمُ بِعِدَّتِهِم مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌ فَلَا تُمَارِ فِيهِمْ إِلَّا مِرَاء ظَاهِرًا وَلَا تَسْتَفْتِ فِيهِم مِّنْهُمْ أَحَدًا ﴿٢٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Nanti (ada orang yang akan) mengatakan (jumlah mereka) adalah tiga orang yang keempat adalah anjingnya, dan (yang lain) mengatakan: "(jumlah mereka) adalah lima orang yang keenam adalah anjing nya", sebagai terkaan terhadap barang yang gaib; dan (yang lain lagi) mengatakan: "(jumlah mereka) tujuh orang, yang ke delapan adalah anjingnya". Katakanlah: "Tuhanku lebih mengetahui jumlah mereka; tidak ada orang yang mengetahui (bilangan) mereka kecuali sedikit". Karena itu janganlah kamu (Muhammad) bertengkar tentang hal mereka, kecuali pertengkaran lahir saja dan jangan kamu menanyakan tentang mereka (pemuda-pemuda itu) kepada seorangpun di antara mereka.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَلِكَ غَدًا ﴿٢٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                Dan jangan sekali-kali kamu mengatakan tentang sesuatu: "Sesungguhnya aku akan mengerjakan ini besok pagi,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِلَّا أَن يَشَاء اللَّهُ وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَى أَن يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَذَا رَشَدًا ﴿٢٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                kecuali (dengan menyebut): "Insya Allah". Dan ingatlah kepada Tuhanmu jika kamu lupa dan katakanlah: "Mudah-mudahan Tuhanku akan memberiku petunjuk kepada yang lebih dekat kebenarannya dari pada ini".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَبِثُوا فِي كَهْفِهِمْ ثَلَاثَ مِائَةٍ سِنِينَ وَازْدَادُوا تِسْعًا ﴿٢٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Dan mereka tinggal dalam gua mereka tiga ratus tahun dan ditambah sembilan tahun (lagi).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قُلِ اللَّهُ أَعْلَمُ بِمَا لَبِثُوا لَهُ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ أَبْصِرْ بِهِ وَأَسْمِعْ مَا لَهُم مِّن دُونِهِ مِن وَلِيٍّ وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا ﴿٢٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                Katakanlah: "Allah lebih mengetahui berapa lamanya mereka tinggal (di gua); kepunyaan-Nya-lah semua yang tersembunyi di langit dan di bumi. Alangkah terang penglihatan-Nya dan alangkah tajam pendengaran-Nya; tak ada seorang pelindungpun bagi mereka selain dari pada-Nya; dan Dia tidak mengambil seorangpun menjadi sekutu-Nya dalam menetapkan keputusan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِن كِتَابِ رَبِّكَ لَا مُبَدِّلَ لِكَلِمَاتِهِ وَلَن تَجِدَ مِن دُونِهِ مُلْتَحَدًا ﴿٢٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                Dan bacakanlah apa yang diwahyukan kepadamu, yaitu kitab Tuhanmu (Al Quran). Tidak ada (seorangpun) yang dapat merubah kalimat-kalimat-Nya. Dan kamu tidak akan dapat menemukan tempat berlindung selain dari pada-Nya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ وَلَا تَعْدُ عَيْنَاكَ عَنْهُمْ تُرِيدُ زِينَةَ الْحَيَاةِ الدُّنْيَا وَلَا تُطِعْ مَنْ أَغْفَلْنَا قَلْبَهُ عَن ذِكْرِنَا وَاتَّبَعَ هَوَاهُ وَكَانَ أَمْرُهُ فُرُطًا ﴿٢٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                Dan bersabarlah kamu bersama-sama dengan orang-orang yang menyeru Tuhannya di pagi dan senja hari dengan mengharap keridhaan-Nya; dan janganlah kedua matamu berpaling dari mereka (karena) mengharapkan perhiasan dunia ini; dan janganlah kamu mengikuti orang yang hatinya telah Kami lalaikan dari mengingati Kami, serta menuruti hawa nafsunya dan adalah keadaannya itu melewati batas.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَقُلِ الْحَقُّ مِن رَّبِّكُمْ فَمَن شَاء فَلْيُؤْمِن وَمَن شَاء فَلْيَكْفُرْ إِنَّا أَعْتَدْنَا لِلظَّالِمِينَ نَارًا أَحَاطَ بِهِمْ سُرَادِقُهَا وَإِن يَسْتَغِيثُوا يُغَاثُوا بِمَاء كَالْمُهْلِ يَشْوِي الْوُجُوهَ بِئْسَ الشَّرَابُ وَسَاءتْ مُرْتَفَقًا ﴿٢٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Dan katakanlah: "Kebenaran itu datangnya dari Tuhanmu; maka barangsiapa yang ingin (beriman) hendaklah ia beriman, dan barangsiapa yang ingin (kafir) biarlah ia kafir". Sesungguhnya Kami telah sediakan bagi orang orang zalim itu neraka, yang gejolaknya mengepung mereka. Dan jika mereka meminta minum, niscaya mereka akan diberi minum dengan air seperti besi yang mendidih yang menghanguskan muka. Itulah minuman yang paling buruk dan tempat istirahat yang paling jelek. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا ﴿٣٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Sesunggunya mereka yang beriman dan beramal saleh, tentulah Kami tidak akan menyia-nyiakan pahala orang-orang yang mengerjakan amalan(nya) dengan yang baik.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أُوْلَئِكَ لَهُمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهِمُ الْأَنْهَارُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ وَيَلْبَسُونَ ثِيَابًا خُضْرًا مِّن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَّكِئِينَ فِيهَا عَلَى الْأَرَائِكِ نِعْمَ الثَّوَابُ وَحَسُنَتْ مُرْتَفَقًا ﴿٣١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>31. </Text>
                Mereka itulah (orang-orang yang) bagi mereka surga 'Adn, mengalir sungai-sungai di bawahnya; dalam surga itu mereka dihiasi dengan gelang mas dan mereka memakai pakaian hijau dari sutera halus dan sutera tebal, sedang mereka duduk sambil bersandar di atas dipan-dipan yang indah. Itulah pahala yang sebaik-baiknya, dan tempat istirahat yang indah;
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَاضْرِبْ لَهُم مَّثَلًا رَّجُلَيْنِ جَعَلْنَا لِأَحَدِهِمَا جَنَّتَيْنِ مِنْ أَعْنَابٍ وَحَفَفْنَاهُمَا بِنَخْلٍ وَجَعَلْنَا بَيْنَهُمَا زَرْعًا ﴿٣٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>32. </Text>
                Dan berikanlah kepada mereka sebuah perumpamaan dua orang laki-laki, Kami jadikan bagi seorang di antara keduanya (yang kafir) dua buah kebun anggur dan kami kelilingi kedua kebun itu dengan pohon-pohon korma dan di antara kedua kebun itu Kami buatkan ladang.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كِلْتَا الْجَنَّتَيْنِ آتَتْ أُكُلَهَا وَلَمْ تَظْلِمْ مِنْهُ شَيْئًا وَفَجَّرْنَا خِلَالَهُمَا نَهَرًا ﴿٣٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>33. </Text>
                Kedua buah kebun itu menghasilkan buahnya, dan kebun itu tiada kurang buahnya sedikitpun, dan Kami alirkan sungai di celah-celah kedua kebun itu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَكَانَ لَهُ ثَمَرٌ فَقَالَ لِصَاحِبِهِ وَهُوَ يُحَاوِرُهُ أَنَا أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا ﴿٣٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>34. </Text>
                dan dia mempunyai kekayaan besar, maka ia berkata kepada kawannya (yang mukmin) ketika bercakap-cakap dengan dia: "Hartaku lebih banyak dari pada hartamu dan pengikut-pengikutku lebih kuat"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَدَخَلَ جَنَّتَهُ وَهُوَ ظَالِمٌ لِّنَفْسِهِ قَالَ مَا أَظُنُّ أَن تَبِيدَ هَذِهِ أَبَدًا ﴿٣٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>35. </Text>
                Dan dia memasuki kebunnya sedang dia zalim terhadap dirinya sendiri; ia berkata: "Aku kira kebun ini tidak akan binasa selama-lamanya,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً وَلَئِن رُّدِدتُّ إِلَى رَبِّي لَأَجِدَنَّ خَيْرًا مِّنْهَا مُنقَلَبًا ﴿٣٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>36. </Text>
                dan aku tidak mengira hari kiamat itu akan datang, dan jika sekiranya aku kembalikan kepada Tuhanku, pasti aku akan mendapat tempat kembali yang lebih baik dari pada kebun-kebun itu".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ لَهُ صَاحِبُهُ وَهُوَ يُحَاوِرُهُ أَكَفَرْتَ بِالَّذِي خَلَقَكَ مِن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ سَوَّاكَ رَجُلًا ﴿٣٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>37. </Text>
                Kawannya (yang mukmin) berkata kepadanya -- sedang dia bercakap-cakap dengannya: "Apakah kamu kafir kepada (Tuhan) yang menciptakan kamu dari tanah, kemudian dari setetes air mani, lalu Dia menjadikan kamu seorang laki-laki yang sempurna?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَّكِنَّا هُوَ اللَّهُ رَبِّي وَلَا أُشْرِكُ بِرَبِّي أَحَدًا ﴿٣٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>38. </Text>
                Tetapi aku (percaya bahwa): Dialah Allah, Tuhanku, dan aku tidak mempersekutukan seorangpun dengan Tuhanku.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاء اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ إِن تُرَنِ أَنَا أَقَلَّ مِنكَ مَالًا وَوَلَدًا ﴿٣٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>39. </Text>
                Dan mengapa kamu tidak mengatakan waktu kamu memasuki kebunmu "maasyaallaah, laa quwwata illaa billaah (sungguh atas kehendak Allah semua ini terwujud, tiada kekuatan kecuali dengan pertolongan Allah). Sekiranya kamu anggap aku lebih sedikit darimu dalam hal harta dan keturunan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَعَسَى رَبِّي أَن يُؤْتِيَنِ خَيْرًا مِّن جَنَّتِكَ وَيُرْسِلَ عَلَيْهَا حُسْبَانًا مِّنَ السَّمَاء فَتُصْبِحَ صَعِيدًا زَلَقًا ﴿٤٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>40. </Text>
                maka mudah-mudahan Tuhanku, akan memberi kepadaku (kebun) yang lebih baik dari pada kebunmu (ini); dan mudah-mudahan Dia mengirimkan ketentuan (petir) dari langit kepada kebunmu; hingga (kebun itu) menjadi tanah yang licin;
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَوْ يُصْبِحَ مَاؤُهَا غَوْرًا فَلَن تَسْتَطِيعَ لَهُ طَلَبًا ﴿٤١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>41. </Text>
                atau airnya menjadi surut ke dalam tanah, maka sekali-kali kamu tidak dapat menemukannya lagi".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأُحِيطَ بِثَمَرِهِ فَأَصْبَحَ يُقَلِّبُ كَفَّيْهِ عَلَى مَا أَنفَقَ فِيهَا وَهِيَ خَاوِيَةٌ عَلَى عُرُوشِهَا وَيَقُولُ يَا لَيْتَنِي لَمْ أُشْرِكْ بِرَبِّي أَحَدًا ﴿٤٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>42. </Text>
                Dan harta kekayaannya dibinasakan; lalu ia membulak-balikkan kedua tangannya (tanda menyesal) terhadap apa yang ia telah belanjakan untuk itu, sedang pohon anggur itu roboh bersama para-paranya dan dia berkata: "Aduhai kiranya dulu aku tidak mempersekutukan seorangpun dengan Tuhanku". 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَمْ تَكُن لَّهُ فِئَةٌ يَنصُرُونَهُ مِن دُونِ اللَّهِ وَمَا كَانَ مُنتَصِرًا ﴿٤٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>43. </Text>
                Dan tidak ada bagi dia segolonganpun yang akan menolongnya selain Allah; dan sekali-kali ia tidak dapat membela dirinya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                هُنَالِكَ الْوَلَايَةُ لِلَّهِ الْحَقِّ هُوَ خَيْرٌ ثَوَابًا وَخَيْرٌ عُقْبًا ﴿٤٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>44. </Text>
                Di sana pertolongan itu hanya dari Allah Yang Hak. Dia adalah sebaik-baik Pemberi pahala dan sebaik-baik Pemberi balasan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَاضْرِبْ لَهُم مَّثَلَ الْحَيَاةِ الدُّنْيَا كَمَاء أَنزَلْنَاهُ مِنَ السَّمَاء فَاخْتَلَطَ بِهِ نَبَاتُ الْأَرْضِ فَأَصْبَحَ هَشِيمًا تَذْرُوهُ الرِّيَاحُ وَكَانَ اللَّهُ عَلَى كُلِّ شَيْءٍ مُّقْتَدِرًا ﴿٤٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>45. </Text>
                Dan berilah perumpamaan kepada mereka (manusia), kehidupan dunia sebagai air hujan yang Kami turunkan dari langit, maka menjadi subur karenanya tumbuh-tumbuhan di muka bumi, kemudian tumbuh-tumbuhan itu menjadi kering yang diterbangkan oleh angin. Dan adalah Allah, Maha Kuasa atas segala sesuatu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا ﴿٤٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>46. </Text>
                Harta dan anak-anak adalah perhiasan kehidupan dunia tetapi amalan-amalan yang kekal lagi saleh adalah lebih baik pahalanya di sisi Tuhanmu serta lebih baik untuk menjadi harapan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَوْمَ نُسَيِّرُ الْجِبَالَ وَتَرَى الْأَرْضَ بَارِزَةً وَحَشَرْنَاهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًا ﴿٤٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>47. </Text>
                Dan (ingatlah) akan hari (yang ketika itu) Kami perjalankan gunung-gunung dan kamu akan dapat melihat bumi itu datar dan Kami kumpulkan seluruh manusia, dan tidak kami tinggalkan seorangpun dari mereka.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَعُرِضُوا عَلَى رَبِّكَ صَفًّا لَّقَدْ جِئْتُمُونَا كَمَا خَلَقْنَاكُمْ أَوَّلَ مَرَّةٍ بَلْ زَعَمْتُمْ أَلَّن نَّجْعَلَ لَكُم مَّوْعِدًا ﴿٤٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>48. </Text>
                Dan mereka akan dibawa ke hadapan Tuhanmu dengan berbaris. Sesungguhnya kamu datang kepada Kami, sebagaimana Kami menciptakan kamu pada kali yang pertama; bahkan kamu mengatakan bahwa Kami sekali-kali tidak akan menetapkan bagi kamu waktu (memenuhi) perjanjian.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَوُضِعَ الْكِتَابُ فَتَرَى الْمُجْرِمِينَ مُشْفِقِينَ مِمَّا فِيهِ وَيَقُولُونَ يَا وَيْلَتَنَا مَالِ هَذَا الْكِتَابِ لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا وَوَجَدُوا مَا عَمِلُوا حَاضِرًا وَلَا يَظْلِمُ رَبُّكَ أَحَدًا ﴿٤٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>49. </Text>
                Dan diletakkanlah kitab, lalu kamu akan melihat orang-orang bersalah ketakutan terhadap apa yang (tertulis) di dalamnya, dan mereka berkata: "Aduhai celaka kami, kitab apakah ini yang tidak meninggalkan yang kecil dan tidak (pula) yang besar, melainkan ia mencatat semuanya; dan mereka dapati apa yang telah mereka kerjakan ada (tertulis). Dan Tuhanmu tidak menganiaya seorang juapun".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ أَفَتَتَّخِذُونَهُ وَذُرِّيَّتَهُ أَوْلِيَاء مِن دُونِي وَهُمْ لَكُمْ عَدُوٌّ بِئْسَ لِلظَّالِمِينَ بَدَلًا ﴿٥٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>50. </Text>
                Dan (ingatlah) ketika Kami berfirman kepada para malaikat: "Sujudlah kamu kepada Adam, maka sujudlah mereka kecuali Iblis. Dia adalah dari golongan jin, maka ia mendurhakai perintah Tuhannya. Patutkah kamu mengambil dia dan turanan-turunannya sebagai pemimpin selain daripada-Ku, sedang mereka adalah musuhmu? Amat buruklah iblis itu sebagai pengganti (dari Allah) bagi orang-orang yang zalim.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَا أَشْهَدتُّهُمْ خَلْقَ السَّمَاوَاتِ وَالْأَرْضِ وَلَا خَلْقَ أَنفُسِهِمْ وَمَا كُنتُ مُتَّخِذَ الْمُضِلِّينَ عَضُدًا ﴿٥١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>51. </Text>
                Aku tidak menghadirkan mereka (iblis dan anak cucunya) untuk menyaksikan penciptaan langit dan bumi dan tidak (pula) penciptaan diri mereka sendiri; dan tidaklah Aku mengambil orang-orang yang menyesatkan itu sebagai penolong.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَيَوْمَ يَقُولُ نَادُوا شُرَكَائِيَ الَّذِينَ زَعَمْتُمْ فَدَعَوْهُمْ فَلَمْ يَسْتَجِيبُوا لَهُمْ وَجَعَلْنَا بَيْنَهُم مَّوْبِقًا ﴿٥٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>52. </Text>
                Dan (ingatlah) akan hari (yang ketika itu) Dia berfirman: "Serulah olehmu sekalian sekutu-sekutu-Ku yang kamu katakan itu". Mereka lalu memanggilnya tetapi sekutu-sekutu itu tidak membalas seruan mereka dan Kami adakan untuk mereka tempat kebinasaan (neraka).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَرَأَى الْمُجْرِمُونَ النَّارَ فَظَنُّوا أَنَّهُم مُّوَاقِعُوهَا وَلَمْ يَجِدُوا عَنْهَا مَصْرِفًا ﴿٥٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>53. </Text>
                Dan orang-orang yang berdosa melihat neraka, maka mereka meyakini, bahwa mereka akan jatuh ke dalamnya dan mereka tidak menemukan tempat berpaling dari padanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَقَدْ صَرَّفْنَا فِي هَذَا الْقُرْآنِ لِلنَّاسِ مِن كُلِّ مَثَلٍ وَكَانَ الْإِنسَانُ أَكْثَرَ شَيْءٍ جَدَلًا ﴿٥٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>54. </Text>
                Dan sesungguhnya Kami telah mengulang-ulangi bagi manusia dalam Al Quran ini bermacam-macam perumpamaan. Dan manusia adalah makhluk yang paling banyak membantah. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَمَا مَنَعَ النَّاسَ أَن يُؤْمِنُوا إِذْ جَاءهُمُ الْهُدَى وَيَسْتَغْفِرُوا رَبَّهُمْ إِلَّا أَن تَأْتِيَهُمْ سُنَّةُ الْأَوَّلِينَ أَوْ يَأْتِيَهُمُ الْعَذَابُ قُبُلًا ﴿٥٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>55. </Text>
                Dam tidak ada sesuatupun yang menghalangi manusia dari beriman, ketika petunjuk telah datang kepada mereka, dan dari memohon ampun kepada Tuhannya, kecuali (keinginan menanti) datangnya hukum (Allah yang telah berlalu pada) umat-umat yang dahulu atau datangnya azab atas mereka dengan nyata.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمَا نُرْسِلُ الْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ وَيُجَادِلُ الَّذِينَ كَفَرُوا بِالْبَاطِلِ لِيُدْحِضُوا بِهِ الْحَقَّ وَاتَّخَذُوا آيَاتِي وَمَا أُنذِرُوا هُزُوًا ﴿٥٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>56. </Text>
                Dan tidaklah Kami mengutus rasul-rasul hanyalah sebagai pembawa berita gembira dan sebagai pemberi peringatan; tetapi orang-orang yang kafir membantah dengan yang batil agar dengan demikian mereka dapat melenyap kan yang hak, dan mereka menganggap ayat-ayat kami dan peringatan-peringatan terhadap mereka sebagai olok-olokan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِآيَاتِ رَبِّهِ فَأَعْرَضَ عَنْهَا وَنَسِيَ مَا قَدَّمَتْ يَدَاهُ إِنَّا جَعَلْنَا عَلَى قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِي آذَانِهِمْ وَقْرًا وَإِن تَدْعُهُمْ إِلَى الْهُدَى فَلَن يَهْتَدُوا إِذًا أَبَدًا ﴿٥٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>57. </Text>
                Dan siapakah yang lebih zalim dari pada orang yang telah diperingatkan dengan ayat-ayat Tuhannya lalu dia berpaling dari padanya dan melupakan apa yang telah dikerjakan oleh kedua tangannya? Sesungguhnya Kami telah meletakkan tutupan di atas hati mereka, (sehingga mereka tidak) memahaminya, dan (Kami letakkan pula) sumbatan di telinga mereka; dan kendatipun kamu menyeru mereka kepada petunjuk, niscaya mereka tidak akan mendapat petunjuk selama-lamanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَرَبُّكَ الْغَفُورُ ذُو الرَّحْمَةِ لَوْ يُؤَاخِذُهُم بِمَا كَسَبُوا لَعَجَّلَ لَهُمُ الْعَذَابَ بَل لَّهُم مَّوْعِدٌ لَّن يَجِدُوا مِن دُونِهِ مَوْئِلًا ﴿٥٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>58. </Text>
                Dan Tuhanmulah yang Maha Pengampun, lagi mempunyai rahmat. Jika Dia mengazab mereka karena perbuatan mereka, tentu Dia akan menyegerakan azab bagi mereka. Tetapi bagi mereka ada waktu yang tertentu (untuk mendapat azab) yang mereka sekali-kali tidak akan menemukan tempat berlindung dari padanya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَتِلْكَ الْقُرَى أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوا وَجَعَلْنَا لِمَهْلِكِهِم مَّوْعِدًا ﴿٥٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>59. </Text>
                Dan (penduduk) negeri telah Kami binasakan ketika mereka berbuat zalim, dan telah Kami tetapkan waktu tertentu bagi kebinasaan mereka.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِذْ قَالَ مُوسَى لِفَتَاهُ لَا أَبْرَحُ حَتَّى أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ أَوْ أَمْضِيَ حُقُبًا ﴿٦٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>60. </Text>
                Dan (ingatlah) ketika Musa berkata kepada muridnya: "Aku tidak akan berhenti (berjalan) sebelum sampai ke pertemuan dua buah lautan; atau aku akan berjalan sampai bertahun-tahun". 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَلَمَّا بَلَغَا مَجْمَعَ بَيْنِهِمَا نَسِيَا حُوتَهُمَا فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَبًا ﴿٦١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>61. </Text>
                Maka tatkala mereka sampai ke pertemuan dua buah laut itu, mereka lalai akan ikannya, lalu ikan itu melompat mengambil jalannya ke laut itu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَلَمَّا جَاوَزَا قَالَ لِفَتَاهُ آتِنَا غَدَاءنَا لَقَدْ لَقِينَا مِن سَفَرِنَا هَذَا نَصَبًا ﴿٦٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>62. </Text>
                Maka tatkala mereka berjalan lebih jauh, berkatalah Musa kepada muridnya: "Bawalah kemari makanan kita; sesungguhnya kita telah merasa letih karena perjalanan kita ini".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ أَرَأَيْتَ إِذْ أَوَيْنَا إِلَى الصَّخْرَةِ فَإِنِّي نَسِيتُ الْحُوتَ وَمَا أَنسَانِيهُ إِلَّا الشَّيْطَانُ أَنْ أَذْكُرَهُ وَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا ﴿٦٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>63. </Text>
                Muridnya menjawab: "Tahukah kamu tatkala kita mencari tempat berlindung di batu tadi, maka sesungguhnya aku lupa (menceritakan tentang) ikan itu dan tidak adalah yang melupakan aku untuk menceritakannya kecuali syaitan dan ikan itu mengambil jalannya ke laut dengan cara yang aneh sekali". 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ ذَلِكَ مَا كُنَّا نَبْغِ فَارْتَدَّا عَلَى آثَارِهِمَا قَصَصًا ﴿٦٤﴾
              </Text> 
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>64. </Text>
                Musa berkata: "Itulah (tempat) yang kita cari". Lalu keduanya kembali, mengikuti jejak mereka semula.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا آتَيْنَاهُ رَحْمَةً مِنْ عِندِنَا وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا ﴿٦٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>65. </Text>
                Lalu mereka bertemu dengan seorang hamba di antara hamba-hamba Kami, yang telah Kami berikan kepadanya rahmat dari sisi Kami, dan yang telah Kami ajarkan kepadanya ilmu dari sisi Kami.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ لَهُ مُوسَى هَلْ أَتَّبِعُكَ عَلَى أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا ﴿٦٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>66. </Text>
                Musa berkata kepada Khidhr: "Bolehkah aku mengikutimu supaya kamu mengajarkan kepadaku ilmu yang benar di antara ilmu-ilmu yang telah diajarkan kepadamu?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا ﴿٦٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>67. </Text>
                Dia menjawab: "Sesungguhnya kamu sekali-kali tidak akan sanggup sabar bersama aku.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَكَيْفَ تَصْبِرُ عَلَى مَا لَمْ تُحِطْ بِهِ خُبْرًا ﴿٦٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>68. </Text>
                Dan bagaimana kamu dapat sabar atas sesuatu, yang kamu belum mempunyai pengetahuan yang cukup tentang hal itu?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ سَتَجِدُنِي إِن شَاء اللَّهُ صَابِرًا وَلَا أَعْصِي لَكَ أَمْرًا ﴿٦٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>69. </Text>
                Musa berkata: "Insya Allah kamu akan mendapati aku sebagai orang yang sabar, dan aku tidak akan menentangmu dalam sesuatu urusanpun".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ فَإِنِ اتَّبَعْتَنِي فَلَا تَسْأَلْنِي عَن شَيْءٍ حَتَّى أُحْدِثَ لَكَ مِنْهُ ذِكْرًا ﴿٧٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>70. </Text>
                Dia berkata: "Jika kamu mengikutiku, maka janganlah kamu menanyakan kepadaku tentang sesuatu apapun, sampai aku sendiri menerangkannya kepadamu".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَانطَلَقَا حَتَّى إِذَا رَكِبَا فِي السَّفِينَةِ خَرَقَهَا قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا لَقَدْ جِئْتَ شَيْئًا إِمْرًا ﴿٧١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>71. </Text>
                Maka berjalanlah keduanya, hingga tatkala keduanya menaiki perahu lalu Khidhr melobanginya. Musa berkata: "Mengapa kamu melobangi perahu itu akibatnya kamu menenggelamkan penumpangnya?" Sesungguhnya kamu telah berbuat sesuatu kesalahan yang besar.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ أَلَمْ أَقُلْ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا ﴿٧٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>72. </Text>
                Dia (Khidhr) berkata: "Bukankah aku telah berkata: "Sesungguhnya kamu sekali-kali tidak akan sabar bersama dengan aku".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ لَا تُؤَاخِذْنِي بِمَا نَسِيتُ وَلَا تُرْهِقْنِي مِنْ أَمْرِي عُسْرًا ﴿٧٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>73. </Text>
                Musa berkata: "Janganlah kamu menghukum aku karena kelupaanku dan janganlah kamu membebani aku dengan sesuatu kesulitan dalam urusanku".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَانطَلَقَا حَتَّى إِذَا لَقِيَا غُلَامًا فَقَتَلَهُ قَالَ أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ لَّقَدْ جِئْتَ شَيْئًا نُّكْرًا ﴿٧٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>74. </Text>
                Maka berjalanlah keduanya; hingga tatkala keduanya berjumpa dengan seorang anak, maka Khidhr membunuhnya. Musa berkata: "Mengapa kamu membunuh jiwa yang bersih, bukan karena dia membunuh orang lain? Sesungguhnya kamu telah melakukan suatu yang mungkar".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِي صَبْرًا ﴿٧٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>75. </Text>
                Khidhr berkata: "Bukankah sudah kukatakan kepadamu, bahwa sesungguhnya kamu tidak akan dapat sabar bersamaku?"
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ إِن سَأَلْتُكَ عَن شَيْءٍ بَعْدَهَا فَلَا تُصَاحِبْنِي قَدْ بَلَغْتَ مِن لَّدُنِّي عُذْرًا ﴿٧٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>76. </Text>
                Musa berkata: "Jika aku bertanya kepadamu tentang sesuatu sesudah (kali) ini, maka janganlah kamu memperbolehkan aku menyertaimu, sesungguhnya kamu sudah cukup memberikan uzur padaku".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَانطَلَقَا حَتَّى إِذَا أَتَيَا أَهْلَ قَرْيَةٍ اسْتَطْعَمَا أَهْلَهَا فَأَبَوْا أَن يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًا يُرِيدُ أَنْ يَنقَضَّ فَأَقَامَهُ قَالَ لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا ﴿٧٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>77. </Text>
                Maka keduanya berjalan; hingga tatkala keduanya sampai kepada penduduk suatu negeri, mereka minta dijamu kepada penduduk negeri itu, tetapi penduduk negeri itu tidak mau menjamu mereka, kemudian keduanya mendapatkan dalam negeri itu dinding rumah yang hampir roboh, maka Khidhr menegakkan dinding itu. Musa berkata: "Jikalau kamu mau, niscaya kamu mengambil upah untuk itu".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ هَذَا فِرَاقُ بَيْنِي وَبَيْنِكَ سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِع عَّلَيْهِ صَبْرًا ﴿٧٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>78. </Text>
                Khidhr berkata: "Inilah perpisahan antara aku dengan kamu; kelak akan kuberitahukan kepadamu tujuan perbuatan-perbuatan yang kamu tidak dapat sabar terhadapnya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدتُّ أَنْ أَعِيبَهَا وَكَانَ وَرَاءهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا ﴿٧٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>79. </Text>
                Adapun bahtera itu adalah kepunyaan orang-orang miskin yang bekerja di laut, dan aku bertujuan merusakkan bahtera itu, karena di hadapan mereka ada seorang raja yang merampas tiap-tiap bahtera.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا ﴿٨٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>80. </Text>
                Dan adapun anak muda itu, maka keduanya adalah orang-orang mukmin, dan kami khawatir bahwa dia akan mendorong kedua orang tuanya itu kepada kesesatan dan kekafiran.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِّنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا ﴿٨١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>81. </Text>
                Dan kami menghendaki, supaya Tuhan mereka mengganti bagi mereka dengan anak lain yang lebih baik kesuciannya dari anaknya itu dan lebih dalam kasih sayangnya (kepada ibu bapaknya).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنزٌ لَّهُمَا وَكَانَ أَبُوهُمَا صَالِحًا فَأَرَادَ رَبُّكَ أَنْ يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا رَحْمَةً مِّن رَّبِّكَ وَمَا فَعَلْتُهُ عَنْ أَمْرِي ذَلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًا ﴿٨٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>82. </Text>
                Adapun dinding rumah adalah kepunyaan dua orang anak yatim di kota itu, dan di bawahnya ada harta benda simpanan bagi mereka berdua, sedang ayahnya adalah seorang yang saleh, maka Tuhanmu menghendaki agar supaya mereka sampai kepada kedewasaannya dan mengeluarkan simpanannya itu, sebagai rahmat dari Tuhanmu; dan bukanlah aku melakukannya itu menurut kemauanku sendiri. Demikian itu adalah tujuan perbuatan-perbuatan yang kamu tidak dapat sabar terhadapnya".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَسْأَلُونَكَ عَن ذِي الْقَرْنَيْنِ قُلْ سَأَتْلُو عَلَيْكُم مِّنْهُ ذِكْرًا ﴿٨٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>83. </Text>
                Mereka akan bertanya kepadamu (Muhammad) tentang Dzulkarnain. Katakanlah: "Aku akan bacakan kepadamu cerita tantangnya".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّا مَكَّنَّا لَهُ فِي الْأَرْضِ وَآتَيْنَاهُ مِن كُلِّ شَيْءٍ سَبَبًا ﴿٨٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>84. </Text>
                Sesungguhnya Kami telah memberi kekuasaan kepadanya di (muka) bumi, dan Kami telah memberikan kepadanya jalan (untuk mencapai) segala sesuatu,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَأَتْبَعَ سَبَبًا ﴿٨٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>85. </Text>
                maka diapun menempuh suatu jalan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                حَتَّى إِذَا بَلَغَ مَغْرِبَ الشَّمْسِ وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ وَوَجَدَ عِندَهَا قَوْمًا قُلْنَا يَا ذَا الْقَرْنَيْنِ إِمَّا أَن تُعَذِّبَ وَإِمَّا أَن تَتَّخِذَ فِيهِمْ حُسْنًا ﴿٨٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>86. </Text>
                Hingga apabila dia telah sampai ketempat terbenam matahari, dia melihat matahari terbenam di dalam laut yang berlumpur hitam, dan dia mendapati di situ segolongan umat. Kami berkata: "Hai Dzulkarnain, kamu boleh menyiksa atau boleh berbuat kebaikan terhadap mereka. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ أَمَّا مَن ظَلَمَ فَسَوْفَ نُعَذِّبُهُ ثُمَّ يُرَدُّ إِلَى رَبِّهِ فَيُعَذِّبُهُ عَذَابًا نُّكْرًا ﴿٨٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>87. </Text>
                Berkata Dzulkarnain: "Adapun orang yang aniaya, maka kami kelak akan mengazabnya, kemudian dia kembalikan kepada Tuhannya, lalu Tuhan mengazabnya dengan azab yang tidak ada taranya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأَمَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا فَلَهُ جَزَاء الْحُسْنَى وَسَنَقُولُ لَهُ مِنْ أَمْرِنَا يُسْرًا ﴿٨٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>88. </Text>
                Adapun orang-orang yang beriman dan beramal saleh, maka baginya pahala yang terbaik sebagai balasan, dan akan kami titahkan kepadanya (perintah) yang mudah dari perintah-perintah kami".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                ثُمَّ أَتْبَعَ سَبَبًا ﴿٨٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>89. </Text>
                Kemudian dia menempuh jalan (yang lain). 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                حَتَّى إِذَا بَلَغَ مَطْلِعَ الشَّمْسِ وَجَدَهَا تَطْلُعُ عَلَى قَوْمٍ لَّمْ نَجْعَل لَّهُم مِّن دُونِهَا سِتْرًا ﴿٩٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>90. </Text>
                Hingga apabila dia telah sampai ke tempat terbit matahari (sebelah Timur) dia mendapati matahari itu menyinari segolongan umat yang Kami tidak menjadikan bagi mereka sesuatu yang melindunginya dari (cahaya) matahari itu,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كَذَلِكَ وَقَدْ أَحَطْنَا بِمَا لَدَيْهِ خُبْرًا ﴿٩١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>91. </Text>
                demikianlah. dan sesungguhnya ilmu Kami meliputi segala apa yang ada padanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ أَتْبَعَ سَبَبًا ﴿٩٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>92. </Text>
                Kemudian dia menempuh suatu jalan (yang lain lagi).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                حَتَّى إِذَا بَلَغَ بَيْنَ السَّدَّيْنِ وَجَدَ مِن دُونِهِمَا قَوْمًا لَّا يَكَادُونَ يَفْقَهُونَ قَوْلًا ﴿٩٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>93. </Text>
                Hingga apabila dia telah sampai di antara dua buah gunung, dia mendapati di hadapan kedua bukit itu suatu kaum yang hampir tidak mengerti pembicaraan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالُوا يَا ذَا الْقَرْنَيْنِ إِنَّ يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِي الْأَرْضِ فَهَلْ نَجْعَلُ لَكَ خَرْجًا عَلَى أَن تَجْعَلَ بَيْنَنَا وَبَيْنَهُمْ سَدًّا ﴿٩٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>94. </Text>
                Mereka berkata: "Hai Dzulkarnain, sesungguhnya Ya'juj dan Ma'juj itu orang-orang yang membuat kerusakan di muka bumi, maka dapatkah kami memberikan sesuatu pembayaran kepadamu, supaya kamu membuat dinding antara kami dan mereka?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ فَأَعِينُونِي بِقُوَّةٍ أَجْعَلْ بَيْنَكُمْ وَبَيْنَهُمْ رَدْمًا ﴿٩٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>95. </Text>
                Dzulkarnain berkata: "Apa yang telah dikuasakan oleh Tuhanku kepadaku terhadapnya adalah lebih baik, maka tolonglah aku dengan kekuatan (manusia dan alat-alat), agar aku membuatkan dinding antara kamu dan mereka,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                آتُونِي زُبَرَ الْحَدِيدِ حَتَّى إِذَا سَاوَى بَيْنَ الصَّدَفَيْنِ قَالَ انفُخُوا حَتَّى إِذَا جَعَلَهُ نَارًا قَالَ آتُونِي أُفْرِغْ عَلَيْهِ قِطْرًا ﴿٩٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>96. </Text>
                berilah aku potongan-potongan besi". Hingga apabila besi itu telah sama rata dengan kedua (puncak) gunung itu, berkatalah Dzulkarnain: "Tiuplah (api itu)". Hingga apabila besi itu sudah menjadi (merah seperti) api, diapun berkata: "Berilah aku tembaga (yang mendidih) agar aku kutuangkan ke atas besi panas itu".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَمَا اسْطَاعُوا أَن يَظْهَرُوهُ وَمَا اسْتَطَاعُوا لَهُ نَقْبًا ﴿٩٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>97. </Text>
                Maka mereka tidak bisa mendakinya dan mereka tidak bisa (pula) melobanginya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ هَذَا رَحْمَةٌ مِّن رَّبِّي فَإِذَا جَاء وَعْدُ رَبِّي جَعَلَهُ دَكَّاء وَكَانَ وَعْدُ رَبِّي حَقًّا ﴿٩٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>98. </Text>
                Dzulkarnain berkata: "Ini (dinding) adalah rahmat dari Tuhanku, maka apabila sudah datang janji Tuhanku, Dia akan menjadikannya hancur luluh; dan janji Tuhanku itu adalah benar".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ يَمُوجُ فِي بَعْضٍ وَنُفِخَ فِي الصُّورِ فَجَمَعْنَاهُمْ جَمْعًا ﴿٩٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>99. </Text>
                Kami biarkan mereka di hari itu bercampur aduk antara satu dengan yang lain, kemudian ditiup lagi sangkakala, lalu Kami kumpulkan mereka itu semuanya,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَعَرَضْنَا جَهَنَّمَ يَوْمَئِذٍ لِّلْكَافِرِينَ عَرْضًا ﴿١٠٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>100. </Text>
                dan Kami nampakkan Jahannam pada hari itu kepada orang-orang kafir dengan jelas,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الَّذِينَ كَانَتْ أَعْيُنُهُمْ فِي غِطَاء عَن ذِكْرِي وَكَانُوا لَا يَسْتَطِيعُونَ سَمْعًا ﴿١٠١﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>101. </Text>
                yaitu orang-orang yang matanya dalam keadaan tertutup dari memperhatikan tanda-tanda kebesaran-Ku, dan adalah mereka tidak sanggup mendengar. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                أَفَحَسِبَ الَّذِينَ كَفَرُوا أَن يَتَّخِذُوا عِبَادِي مِن دُونِي أَوْلِيَاء إِنَّا أَعْتَدْنَا جَهَنَّمَ لِلْكَافِرِينَ نُزُلًا ﴿١٠٢﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>102. </Text>
                maka apakah orang-orang kafir menyangka bahwa mereka (dapat) mengambil hamba-hamba-Ku menjadi penolong selain Aku? Sesungguhnya Kami telah menyediakan neraka Jahannam tempat tinggal bagi orang-orang kafir.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هَلْ نُنَبِّئُكُمْ بِالْأَخْسَرِينَ أَعْمَالًا ﴿١٠٣﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>103. </Text>
                Katakanlah: "Apakah akan Kami beritahukan kepadamu tentang orang-orang yang paling merugi perbuatannya?"
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا ﴿١٠٤﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>104. </Text>
                Yaitu orang-orang yang telah sia-sia perbuatannya dalam kehidupan dunia ini, sedangkan mereka menyangka bahwa mereka berbuat sebaik-baiknya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أُولَئِكَ الَّذِينَ كَفَرُوا بِآيَاتِ رَبِّهِمْ وَلِقَائِهِ فَحَبِطَتْ أَعْمَالُهُمْ فَلَا نُقِيمُ لَهُمْ يَوْمَ الْقِيَامَةِ وَزْنًا ﴿١٠٥﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>105. </Text>
                Mereka itu orang-orang yang telah kufur terhadap ayat-ayat Tuhan mereka dan (kufur terhadap) perjumpaan dengan Dia, maka hapuslah amalan-amalan mereka, dan Kami tidak mengadakan suatu penilaian bagi (amalan) mereka pada hari kiamat.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ذَلِكَ جَزَاؤُهُمْ جَهَنَّمُ بِمَا كَفَرُوا وَاتَّخَذُوا آيَاتِي وَرُسُلِي هُزُوًا ﴿١٠٦﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>106. </Text>
                Demikianlah balasan mereka itu neraka Jahannam, disebabkan kekafiran mereka dan disebabkan mereka menjadikan ayat-ayat-Ku dan rasul-rasul-Ku sebagai olok-olok.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا ﴿١٠٧﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>107. </Text>
                Sesungguhnya orang-orang yang beriman dan beramal saleh, bagi mereka adalah surga Firdaus menjadi tempat tinggal,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                خَالِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًا ﴿١٠٨﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>108. </Text>
                mereka kekal di dalamnya, mereka tidak ingin berpindah dari padanya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا ﴿١٠٩﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>109. </Text>
                Katakanlah: Sekiranya lautan menjadi tinta untuk (menulis) kalimat-kalimat Tuhanku, sungguh habislah lautan itu sebelum habis (ditulis) kalimat-kalimat Tuhanku, meskipun Kami datangkan tambahan sebanyak itu (pula)". 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَى إِلَيَّ أَنَّمَا إِلَهُكُمْ إِلَهٌ وَاحِدٌ فَمَن كَانَ يَرْجُو لِقَاء رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا ﴿١١٠﴾
              </Text>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>110. </Text>
                Katakanlah: Sesungguhnya aku ini manusia biasa seperti kamu, yang diwahyukan kepadaku: "Bahwa sesungguhnya Tuhan kamu itu adalah Tuhan yang Esa". Barangsiapa mengharap perjumpaan dengan Tuhannya, maka hendaklah ia mengerjakan amal yang saleh dan janganlah ia mempersekutukan seorangpun dalam beribadat kepada Tuhannya".
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
                الْحَمْدُ لِلَّهِ الَّذِي أَنزَلَ عَلَى عَبْدِهِ الْكِتَابَ وَلَمْ يَجْعَل لَّهُ عِوَجَا ﴿١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَيِّمًا لِّيُنذِرَ بَأْسًا شَدِيدًا مِن لَّدُنْهُ وَيُبَشِّرَ الْمُؤْمِنِينَ الَّذِينَ يَعْمَلُونَ الصَّالِحَاتِ أَنَّ لَهُمْ أَجْرًا حَسَنًا ﴿٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَاكِثِينَ فِيهِ أَبَدًا ﴿٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَيُنذِرَ الَّذِينَ قَالُوا اتَّخَذَ اللَّهُ وَلَدًا ﴿٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَّا لَهُم بِهِ مِنْ عِلْمٍ وَلَا لِآبَائِهِمْ كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ إِن يَقُولُونَ إِلَّا كَذِبًا ﴿٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَلَعَلَّكَ بَاخِعٌ نَّفْسَكَ عَلَى آثَارِهِمْ إِن لَّمْ يُؤْمِنُوا بِهَذَا الْحَدِيثِ أَسَفًا ﴿٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّا جَعَلْنَا مَا عَلَى الْأَرْضِ زِينَةً لَّهَا لِنَبْلُوَهُمْ أَيُّهُمْ أَحْسَنُ عَمَلًا ﴿٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِنَّا لَجَاعِلُونَ مَا عَلَيْهَا صَعِيدًا جُرُزًا ﴿٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا ﴿٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا ﴿١٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَضَرَبْنَا عَلَى آذَانِهِمْ فِي الْكَهْفِ سِنِينَ عَدَدًا ﴿١١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ بَعَثْنَاهُمْ لِنَعْلَمَ أَيُّ الْحِزْبَيْنِ أَحْصَى لِمَا لَبِثُوا أَمَدًا ﴿١٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                نَحْنُ نَقُصُّ عَلَيْكَ نَبَأَهُم بِالْحَقِّ إِنَّهُمْ فِتْيَةٌ آمَنُوا بِرَبِّهِمْ وَزِدْنَاهُمْ هُدًى ﴿١٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَرَبَطْنَا عَلَى قُلُوبِهِمْ إِذْ قَامُوا فَقَالُوا رَبُّنَا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ لَن نَّدْعُوَ مِن دُونِهِ إِلَهًا لَقَدْ قُلْنَا إِذًا شَطَطًا ﴿١٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                هَؤُلَاء قَوْمُنَا اتَّخَذُوا مِن دُونِهِ آلِهَةً لَّوْلَا يَأْتُونَ عَلَيْهِم بِسُلْطَانٍ بَيِّنٍ فَمَنْ أَظْلَمُ مِمَّنِ افْتَرَى عَلَى اللَّهِ كَذِبًا ﴿١٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِذِ اعْتَزَلْتُمُوهُمْ وَمَا يَعْبُدُونَ إِلَّا اللَّهَ فَأْوُوا إِلَى الْكَهْفِ يَنشُرْ لَكُمْ رَبُّكُم مِّن رَّحمته ويُهَيِّئْ لَكُم مِّنْ أَمْرِكُم مِّرْفَقًا ﴿١٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَتَرَى الشَّمْسَ إِذَا طَلَعَت تَّزَاوَرُ عَن كَهْفِهِمْ ذَاتَ الْيَمِينِ وَإِذَا غَرَبَت تَّقْرِضُهُمْ ذَاتَ الشِّمَالِ وَهُمْ فِي فَجْوَةٍ مِّنْهُ ذَلِكَ مِنْ آيَاتِ اللَّهِ مَن يَهْدِ اللَّهُ فَهُوَ الْمُهْتَدِي وَمَن يُضْلِلْ فَلَن تَجِدَ لَهُ وَلِيًّا مُّرْشِدًا ﴿١٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَتَحْسَبُهُمْ أَيْقَاظًا وَهُمْ رُقُودٌ وَنُقَلِّبُهُمْ ذَاتَ الْيَمِينِ وَذَاتَ الشِّمَالِ وَكَلْبُهُم بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ لَوِ اطَّلَعْتَ عَلَيْهِمْ لَوَلَّيْتَ مِنْهُمْ فِرَارًا وَلَمُلِئْتَ مِنْهُمْ رُعْبًا ﴿١٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَكَذَلِكَ بَعَثْنَاهُمْ لِيَتَسَاءلُوا بَيْنَهُمْ قَالَ قَائِلٌ مِّنْهُمْ كَمْ لَبِثْتُمْ قَالُوا لَبِثْنَا يَوْمًا أَوْ بَعْضَ يَوْمٍ قَالُوا رَبُّكُمْ أَعْلَمُ بِمَا لَبِثْتُمْ فَابْعَثُوا أَحَدَكُم بِوَرِقِكُمْ هَذِهِ إِلَى الْمَدِينَةِ فَلْيَنظُرْ أَيُّهَا أَزْكَى طَعَامًا فَلْيَأْتِكُم بِرِزْقٍ مِّنْهُ وَلْيَتَلَطَّفْ وَلَا يُشْعِرَنَّ بِكُمْ أَحَدًا ﴿١٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّهُمْ إِن يَظْهَرُوا عَلَيْكُمْ يَرْجُمُوكُمْ أَوْ يُعِيدُوكُمْ فِي مِلَّتِهِمْ وَلَن تُفْلِحُوا إِذًا أَبَدًا ﴿٢٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَكَذَلِكَ أَعْثَرْنَا عَلَيْهِمْ لِيَعْلَمُوا أَنَّ وَعْدَ اللَّهِ حَقٌّ وَأَنَّ السَّاعَةَ لَا رَيْبَ فِيهَا إِذْ يَتَنَازَعُونَ بَيْنَهُمْ أَمْرَهُمْ فَقَالُوا ابْنُوا عَلَيْهِم بُنْيَانًا رَّبُّهُمْ أَعْلَمُ بِهِمْ قَالَ الَّذِينَ غَلَبُوا عَلَى أَمْرِهِمْ لَنَتَّخِذَنَّ عَلَيْهِم مَّسْجِدًا ﴿٢١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                سَيَقُولُونَ ثَلَاثَةٌ رَّابِعُهُمْ كَلْبُهُمْ وَيَقُولُونَ خَمْسَةٌ سَادِسُهُمْ كَلْبُهُمْ رَجْمًا بِالْغَيْبِ وَيَقُولُونَ سَبْعَةٌ وَثَامِنُهُمْ كَلْبُهُمْ قُل رَّبِّي أَعْلَمُ بِعِدَّتِهِم مَّا يَعْلَمُهُمْ إِلَّا قَلِيلٌ فَلَا تُمَارِ فِيهِمْ إِلَّا مِرَاء ظَاهِرًا وَلَا تَسْتَفْتِ فِيهِم مِّنْهُمْ أَحَدًا ﴿٢٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَا تَقُولَنَّ لِشَيْءٍ إِنِّي فَاعِلٌ ذَلِكَ غَدًا ﴿٢٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِلَّا أَن يَشَاء اللَّهُ وَاذْكُر رَّبَّكَ إِذَا نَسِيتَ وَقُلْ عَسَى أَن يَهْدِيَنِ رَبِّي لِأَقْرَبَ مِنْ هَذَا رَشَدًا ﴿٢٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَبِثُوا فِي كَهْفِهِمْ ثَلَاثَ مِائَةٍ سِنِينَ وَازْدَادُوا تِسْعًا ﴿٢٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قُلِ اللَّهُ أَعْلَمُ بِمَا لَبِثُوا لَهُ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ أَبْصِرْ بِهِ وَأَسْمِعْ مَا لَهُم مِّن دُونِهِ مِن وَلِيٍّ وَلَا يُشْرِكُ فِي حُكْمِهِ أَحَدًا ﴿٢٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَاتْلُ مَا أُوحِيَ إِلَيْكَ مِن كِتَابِ رَبِّكَ لَا مُبَدِّلَ لِكَلِمَاتِهِ وَلَن تَجِدَ مِن دُونِهِ مُلْتَحَدًا ﴿٢٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُم بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ وَلَا تَعْدُ عَيْنَاكَ عَنْهُمْ تُرِيدُ زِينَةَ الْحَيَاةِ الدُّنْيَا وَلَا تُطِعْ مَنْ أَغْفَلْنَا قَلْبَهُ عَن ذِكْرِنَا وَاتَّبَعَ هَوَاهُ وَكَانَ أَمْرُهُ فُرُطًا ﴿٢٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَقُلِ الْحَقُّ مِن رَّبِّكُمْ فَمَن شَاء فَلْيُؤْمِن وَمَن شَاء فَلْيَكْفُرْ إِنَّا أَعْتَدْنَا لِلظَّالِمِينَ نَارًا أَحَاطَ بِهِمْ سُرَادِقُهَا وَإِن يَسْتَغِيثُوا يُغَاثُوا بِمَاء كَالْمُهْلِ يَشْوِي الْوُجُوهَ بِئْسَ الشَّرَابُ وَسَاءتْ مُرْتَفَقًا ﴿٢٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا ﴿٣٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أُوْلَئِكَ لَهُمْ جَنَّاتُ عَدْنٍ تَجْرِي مِن تَحْتِهِمُ الْأَنْهَارُ يُحَلَّوْنَ فِيهَا مِنْ أَسَاوِرَ مِن ذَهَبٍ وَيَلْبَسُونَ ثِيَابًا خُضْرًا مِّن سُندُسٍ وَإِسْتَبْرَقٍ مُّتَّكِئِينَ فِيهَا عَلَى الْأَرَائِكِ نِعْمَ الثَّوَابُ وَحَسُنَتْ مُرْتَفَقًا ﴿٣١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَاضْرِبْ لَهُم مَّثَلًا رَّجُلَيْنِ جَعَلْنَا لِأَحَدِهِمَا جَنَّتَيْنِ مِنْ أَعْنَابٍ وَحَفَفْنَاهُمَا بِنَخْلٍ وَجَعَلْنَا بَيْنَهُمَا زَرْعًا ﴿٣٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كِلْتَا الْجَنَّتَيْنِ آتَتْ أُكُلَهَا وَلَمْ تَظْلِمْ مِنْهُ شَيْئًا وَفَجَّرْنَا خِلَالَهُمَا نَهَرًا ﴿٣٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَكَانَ لَهُ ثَمَرٌ فَقَالَ لِصَاحِبِهِ وَهُوَ يُحَاوِرُهُ أَنَا أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا ﴿٣٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَدَخَلَ جَنَّتَهُ وَهُوَ ظَالِمٌ لِّنَفْسِهِ قَالَ مَا أَظُنُّ أَن تَبِيدَ هَذِهِ أَبَدًا ﴿٣٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً وَلَئِن رُّدِدتُّ إِلَى رَبِّي لَأَجِدَنَّ خَيْرًا مِّنْهَا مُنقَلَبًا ﴿٣٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ لَهُ صَاحِبُهُ وَهُوَ يُحَاوِرُهُ أَكَفَرْتَ بِالَّذِي خَلَقَكَ مِن تُرَابٍ ثُمَّ مِن نُّطْفَةٍ ثُمَّ سَوَّاكَ رَجُلًا ﴿٣٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                لَّكِنَّا هُوَ اللَّهُ رَبِّي وَلَا أُشْرِكُ بِرَبِّي أَحَدًا ﴿٣٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَوْلَا إِذْ دَخَلْتَ جَنَّتَكَ قُلْتَ مَا شَاء اللَّهُ لَا قُوَّةَ إِلَّا بِاللَّهِ إِن تُرَنِ أَنَا أَقَلَّ مِنكَ مَالًا وَوَلَدًا ﴿٣٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَعَسَى رَبِّي أَن يُؤْتِيَنِ خَيْرًا مِّن جَنَّتِكَ وَيُرْسِلَ عَلَيْهَا حُسْبَانًا مِّنَ السَّمَاء فَتُصْبِحَ صَعِيدًا زَلَقًا ﴿٤٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَوْ يُصْبِحَ مَاؤُهَا غَوْرًا فَلَن تَسْتَطِيعَ لَهُ طَلَبًا ﴿٤١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأُحِيطَ بِثَمَرِهِ فَأَصْبَحَ يُقَلِّبُ كَفَّيْهِ عَلَى مَا أَنفَقَ فِيهَا وَهِيَ خَاوِيَةٌ عَلَى عُرُوشِهَا وَيَقُولُ يَا لَيْتَنِي لَمْ أُشْرِكْ بِرَبِّي أَحَدًا ﴿٤٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَلَمْ تَكُن لَّهُ فِئَةٌ يَنصُرُونَهُ مِن دُونِ اللَّهِ وَمَا كَانَ مُنتَصِرًا ﴿٤٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                هُنَالِكَ الْوَلَايَةُ لِلَّهِ الْحَقِّ هُوَ خَيْرٌ ثَوَابًا وَخَيْرٌ عُقْبًا ﴿٤٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَاضْرِبْ لَهُم مَّثَلَ الْحَيَاةِ الدُّنْيَا كَمَاء أَنزَلْنَاهُ مِنَ السَّمَاء فَاخْتَلَطَ بِهِ نَبَاتُ الْأَرْضِ فَأَصْبَحَ هَشِيمًا تَذْرُوهُ الرِّيَاحُ وَكَانَ اللَّهُ عَلَى كُلِّ شَيْءٍ مُّقْتَدِرًا ﴿٤٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                الْمَالُ وَالْبَنُونَ زِينَةُ الْحَيَاةِ الدُّنْيَا وَالْبَاقِيَاتُ الصَّالِحَاتُ خَيْرٌ عِندَ رَبِّكَ ثَوَابًا وَخَيْرٌ أَمَلًا ﴿٤٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَوْمَ نُسَيِّرُ الْجِبَالَ وَتَرَى الْأَرْضَ بَارِزَةً وَحَشَرْنَاهُمْ فَلَمْ نُغَادِرْ مِنْهُمْ أَحَدًا ﴿٤٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَعُرِضُوا عَلَى رَبِّكَ صَفًّا لَّقَدْ جِئْتُمُونَا كَمَا خَلَقْنَاكُمْ أَوَّلَ مَرَّةٍ بَلْ زَعَمْتُمْ أَلَّن نَّجْعَلَ لَكُم مَّوْعِدًا ﴿٤٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَوُضِعَ الْكِتَابُ فَتَرَى الْمُجْرِمِينَ مُشْفِقِينَ مِمَّا فِيهِ وَيَقُولُونَ يَا وَيْلَتَنَا مَالِ هَذَا الْكِتَابِ لَا يُغَادِرُ صَغِيرَةً وَلَا كَبِيرَةً إِلَّا أَحْصَاهَا وَوَجَدُوا مَا عَمِلُوا حَاضِرًا وَلَا يَظْلِمُ رَبُّكَ أَحَدًا ﴿٤٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ كَانَ مِنَ الْجِنِّ فَفَسَقَ عَنْ أَمْرِ رَبِّهِ أَفَتَتَّخِذُونَهُ وَذُرِّيَّتَهُ أَوْلِيَاء مِن دُونِي وَهُمْ لَكُمْ عَدُوٌّ بِئْسَ لِلظَّالِمِينَ بَدَلًا ﴿٥٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                مَا أَشْهَدتُّهُمْ خَلْقَ السَّمَاوَاتِ وَالْأَرْضِ وَلَا خَلْقَ أَنفُسِهِمْ وَمَا كُنتُ مُتَّخِذَ الْمُضِلِّينَ عَضُدًا ﴿٥١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَيَوْمَ يَقُولُ نَادُوا شُرَكَائِيَ الَّذِينَ زَعَمْتُمْ فَدَعَوْهُمْ فَلَمْ يَسْتَجِيبُوا لَهُمْ وَجَعَلْنَا بَيْنَهُم مَّوْبِقًا ﴿٥٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَرَأَى الْمُجْرِمُونَ النَّارَ فَظَنُّوا أَنَّهُم مُّوَاقِعُوهَا وَلَمْ يَجِدُوا عَنْهَا مَصْرِفًا ﴿٥٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَلَقَدْ صَرَّفْنَا فِي هَذَا الْقُرْآنِ لِلنَّاسِ مِن كُلِّ مَثَلٍ وَكَانَ الْإِنسَانُ أَكْثَرَ شَيْءٍ جَدَلًا ﴿٥٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَمَا مَنَعَ النَّاسَ أَن يُؤْمِنُوا إِذْ جَاءهُمُ الْهُدَى وَيَسْتَغْفِرُوا رَبَّهُمْ إِلَّا أَن تَأْتِيَهُمْ سُنَّةُ الْأَوَّلِينَ أَوْ يَأْتِيَهُمُ الْعَذَابُ قُبُلًا ﴿٥٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَمَا نُرْسِلُ الْمُرْسَلِينَ إِلَّا مُبَشِّرِينَ وَمُنذِرِينَ وَيُجَادِلُ الَّذِينَ كَفَرُوا بِالْبَاطِلِ لِيُدْحِضُوا بِهِ الْحَقَّ وَاتَّخَذُوا آيَاتِي وَمَا أُنذِرُوا هُزُوًا ﴿٥٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَمَنْ أَظْلَمُ مِمَّن ذُكِّرَ بِآيَاتِ رَبِّهِ فَأَعْرَضَ عَنْهَا وَنَسِيَ مَا قَدَّمَتْ يَدَاهُ إِنَّا جَعَلْنَا عَلَى قُلُوبِهِمْ أَكِنَّةً أَن يَفْقَهُوهُ وَفِي آذَانِهِمْ وَقْرًا وَإِن تَدْعُهُمْ إِلَى الْهُدَى فَلَن يَهْتَدُوا إِذًا أَبَدًا ﴿٥٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَرَبُّكَ الْغَفُورُ ذُو الرَّحْمَةِ لَوْ يُؤَاخِذُهُم بِمَا كَسَبُوا لَعَجَّلَ لَهُمُ الْعَذَابَ بَل لَّهُم مَّوْعِدٌ لَّن يَجِدُوا مِن دُونِهِ مَوْئِلًا ﴿٥٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَتِلْكَ الْقُرَى أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوا وَجَعَلْنَا لِمَهْلِكِهِم مَّوْعِدًا ﴿٥٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَإِذْ قَالَ مُوسَى لِفَتَاهُ لَا أَبْرَحُ حَتَّى أَبْلُغَ مَجْمَعَ الْبَحْرَيْنِ أَوْ أَمْضِيَ حُقُبًا ﴿٦٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَلَمَّا بَلَغَا مَجْمَعَ بَيْنِهِمَا نَسِيَا حُوتَهُمَا فَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ سَرَبًا ﴿٦١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَلَمَّا جَاوَزَا قَالَ لِفَتَاهُ آتِنَا غَدَاءنَا لَقَدْ لَقِينَا مِن سَفَرِنَا هَذَا نَصَبًا ﴿٦٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ أَرَأَيْتَ إِذْ أَوَيْنَا إِلَى الصَّخْرَةِ فَإِنِّي نَسِيتُ الْحُوتَ وَمَا أَنسَانِيهُ إِلَّا الشَّيْطَانُ أَنْ أَذْكُرَهُ وَاتَّخَذَ سَبِيلَهُ فِي الْبَحْرِ عَجَبًا ﴿٦٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ ذَلِكَ مَا كُنَّا نَبْغِ فَارْتَدَّا عَلَى آثَارِهِمَا قَصَصًا ﴿٦٤﴾
              </Text> 
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا آتَيْنَاهُ رَحْمَةً مِنْ عِندِنَا وَعَلَّمْنَاهُ مِن لَّدُنَّا عِلْمًا ﴿٦٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ لَهُ مُوسَى هَلْ أَتَّبِعُكَ عَلَى أَن تُعَلِّمَنِ مِمَّا عُلِّمْتَ رُشْدًا ﴿٦٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا ﴿٦٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَكَيْفَ تَصْبِرُ عَلَى مَا لَمْ تُحِطْ بِهِ خُبْرًا ﴿٦٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ سَتَجِدُنِي إِن شَاء اللَّهُ صَابِرًا وَلَا أَعْصِي لَكَ أَمْرًا ﴿٦٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ فَإِنِ اتَّبَعْتَنِي فَلَا تَسْأَلْنِي عَن شَيْءٍ حَتَّى أُحْدِثَ لَكَ مِنْهُ ذِكْرًا ﴿٧٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَانطَلَقَا حَتَّى إِذَا رَكِبَا فِي السَّفِينَةِ خَرَقَهَا قَالَ أَخَرَقْتَهَا لِتُغْرِقَ أَهْلَهَا لَقَدْ جِئْتَ شَيْئًا إِمْرًا ﴿٧١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ أَلَمْ أَقُلْ إِنَّكَ لَن تَسْتَطِيعَ مَعِيَ صَبْرًا ﴿٧٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ لَا تُؤَاخِذْنِي بِمَا نَسِيتُ وَلَا تُرْهِقْنِي مِنْ أَمْرِي عُسْرًا ﴿٧٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                فَانطَلَقَا حَتَّى إِذَا لَقِيَا غُلَامًا فَقَتَلَهُ قَالَ أَقَتَلْتَ نَفْسًا زَكِيَّةً بِغَيْرِ نَفْسٍ لَّقَدْ جِئْتَ شَيْئًا نُّكْرًا ﴿٧٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ أَلَمْ أَقُل لَّكَ إِنَّكَ لَن تَسْتَطِيعَ مَعِي صَبْرًا ﴿٧٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ إِن سَأَلْتُكَ عَن شَيْءٍ بَعْدَهَا فَلَا تُصَاحِبْنِي قَدْ بَلَغْتَ مِن لَّدُنِّي عُذْرًا ﴿٧٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَانطَلَقَا حَتَّى إِذَا أَتَيَا أَهْلَ قَرْيَةٍ اسْتَطْعَمَا أَهْلَهَا فَأَبَوْا أَن يُضَيِّفُوهُمَا فَوَجَدَا فِيهَا جِدَارًا يُرِيدُ أَنْ يَنقَضَّ فَأَقَامَهُ قَالَ لَوْ شِئْتَ لَاتَّخَذْتَ عَلَيْهِ أَجْرًا ﴿٧٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ هَذَا فِرَاقُ بَيْنِي وَبَيْنِكَ سَأُنَبِّئُكَ بِتَأْوِيلِ مَا لَمْ تَسْتَطِع عَّلَيْهِ صَبْرًا ﴿٧٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أَمَّا السَّفِينَةُ فَكَانَتْ لِمَسَاكِينَ يَعْمَلُونَ فِي الْبَحْرِ فَأَرَدتُّ أَنْ أَعِيبَهَا وَكَانَ وَرَاءهُم مَّلِكٌ يَأْخُذُ كُلَّ سَفِينَةٍ غَصْبًا ﴿٧٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأَمَّا الْغُلَامُ فَكَانَ أَبَوَاهُ مُؤْمِنَيْنِ فَخَشِينَا أَن يُرْهِقَهُمَا طُغْيَانًا وَكُفْرًا ﴿٨٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَأَرَدْنَا أَن يُبْدِلَهُمَا رَبُّهُمَا خَيْرًا مِّنْهُ زَكَاةً وَأَقْرَبَ رُحْمًا ﴿٨١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأَمَّا الْجِدَارُ فَكَانَ لِغُلَامَيْنِ يَتِيمَيْنِ فِي الْمَدِينَةِ وَكَانَ تَحْتَهُ كَنزٌ لَّهُمَا وَكَانَ أَبُوهُمَا صَالِحًا فَأَرَادَ رَبُّكَ أَنْ يَبْلُغَا أَشُدَّهُمَا وَيَسْتَخْرِجَا كَنزَهُمَا رَحْمَةً مِّن رَّبِّكَ وَمَا فَعَلْتُهُ عَنْ أَمْرِي ذَلِكَ تَأْوِيلُ مَا لَمْ تَسْطِع عَّلَيْهِ صَبْرًا ﴿٨٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَيَسْأَلُونَكَ عَن ذِي الْقَرْنَيْنِ قُلْ سَأَتْلُو عَلَيْكُم مِّنْهُ ذِكْرًا ﴿٨٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                إِنَّا مَكَّنَّا لَهُ فِي الْأَرْضِ وَآتَيْنَاهُ مِن كُلِّ شَيْءٍ سَبَبًا ﴿٨٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَأَتْبَعَ سَبَبًا ﴿٨٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                حَتَّى إِذَا بَلَغَ مَغْرِبَ الشَّمْسِ وَجَدَهَا تَغْرُبُ فِي عَيْنٍ حَمِئَةٍ وَوَجَدَ عِندَهَا قَوْمًا قُلْنَا يَا ذَا الْقَرْنَيْنِ إِمَّا أَن تُعَذِّبَ وَإِمَّا أَن تَتَّخِذَ فِيهِمْ حُسْنًا ﴿٨٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ أَمَّا مَن ظَلَمَ فَسَوْفَ نُعَذِّبُهُ ثُمَّ يُرَدُّ إِلَى رَبِّهِ فَيُعَذِّبُهُ عَذَابًا نُّكْرًا ﴿٨٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَأَمَّا مَنْ آمَنَ وَعَمِلَ صَالِحًا فَلَهُ جَزَاء الْحُسْنَى وَسَنَقُولُ لَهُ مِنْ أَمْرِنَا يُسْرًا ﴿٨٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                ثُمَّ أَتْبَعَ سَبَبًا ﴿٨٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                حَتَّى إِذَا بَلَغَ مَطْلِعَ الشَّمْسِ وَجَدَهَا تَطْلُعُ عَلَى قَوْمٍ لَّمْ نَجْعَل لَّهُم مِّن دُونِهَا سِتْرًا ﴿٩٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                كَذَلِكَ وَقَدْ أَحَطْنَا بِمَا لَدَيْهِ خُبْرًا ﴿٩١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ثُمَّ أَتْبَعَ سَبَبًا ﴿٩٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                حَتَّى إِذَا بَلَغَ بَيْنَ السَّدَّيْنِ وَجَدَ مِن دُونِهِمَا قَوْمًا لَّا يَكَادُونَ يَفْقَهُونَ قَوْلًا ﴿٩٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالُوا يَا ذَا الْقَرْنَيْنِ إِنَّ يَأْجُوجَ وَمَأْجُوجَ مُفْسِدُونَ فِي الْأَرْضِ فَهَلْ نَجْعَلُ لَكَ خَرْجًا عَلَى أَن تَجْعَلَ بَيْنَنَا وَبَيْنَهُمْ سَدًّا ﴿٩٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قَالَ مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ فَأَعِينُونِي بِقُوَّةٍ أَجْعَلْ بَيْنَكُمْ وَبَيْنَهُمْ رَدْمًا ﴿٩٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                آتُونِي زُبَرَ الْحَدِيدِ حَتَّى إِذَا سَاوَى بَيْنَ الصَّدَفَيْنِ قَالَ انفُخُوا حَتَّى إِذَا جَعَلَهُ نَارًا قَالَ آتُونِي أُفْرِغْ عَلَيْهِ قِطْرًا ﴿٩٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                فَمَا اسْطَاعُوا أَن يَظْهَرُوهُ وَمَا اسْتَطَاعُوا لَهُ نَقْبًا ﴿٩٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قَالَ هَذَا رَحْمَةٌ مِّن رَّبِّي فَإِذَا جَاء وَعْدُ رَبِّي جَعَلَهُ دَكَّاء وَكَانَ وَعْدُ رَبِّي حَقًّا ﴿٩٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                وَتَرَكْنَا بَعْضَهُمْ يَوْمَئِذٍ يَمُوجُ فِي بَعْضٍ وَنُفِخَ فِي الصُّورِ فَجَمَعْنَاهُمْ جَمْعًا ﴿٩٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                وَعَرَضْنَا جَهَنَّمَ يَوْمَئِذٍ لِّلْكَافِرِينَ عَرْضًا ﴿١٠٠﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                الَّذِينَ كَانَتْ أَعْيُنُهُمْ فِي غِطَاء عَن ذِكْرِي وَكَانُوا لَا يَسْتَطِيعُونَ سَمْعًا ﴿١٠١﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                أَفَحَسِبَ الَّذِينَ كَفَرُوا أَن يَتَّخِذُوا عِبَادِي مِن دُونِي أَوْلِيَاء إِنَّا أَعْتَدْنَا جَهَنَّمَ لِلْكَافِرِينَ نُزُلًا ﴿١٠٢﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُلْ هَلْ نُنَبِّئُكُمْ بِالْأَخْسَرِينَ أَعْمَالًا ﴿١٠٣﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                الَّذِينَ ضَلَّ سَعْيُهُمْ فِي الْحَيَاةِ الدُّنْيَا وَهُمْ يَحْسَبُونَ أَنَّهُمْ يُحْسِنُونَ صُنْعًا ﴿١٠٤﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                أُولَئِكَ الَّذِينَ كَفَرُوا بِآيَاتِ رَبِّهِمْ وَلِقَائِهِ فَحَبِطَتْ أَعْمَالُهُمْ فَلَا نُقِيمُ لَهُمْ يَوْمَ الْقِيَامَةِ وَزْنًا ﴿١٠٥﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                ذَلِكَ جَزَاؤُهُمْ جَهَنَّمُ بِمَا كَفَرُوا وَاتَّخَذُوا آيَاتِي وَرُسُلِي هُزُوًا ﴿١٠٦﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا ﴿١٠٧﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                خَالِدِينَ فِيهَا لَا يَبْغُونَ عَنْهَا حِوَلًا ﴿١٠٨﴾
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.arab}>
                قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا ﴿١٠٩﴾
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.arab}>
                قُلْ إِنَّمَا أَنَا بَشَرٌ مِّثْلُكُمْ يُوحَى إِلَيَّ أَنَّمَا إِلَهُكُمْ إِلَهٌ وَاحِدٌ فَمَن كَانَ يَرْجُو لِقَاء رَبِّهِ فَلْيَعْمَلْ عَمَلًا صَالِحًا وَلَا يُشْرِكْ بِعِبَادَةِ رَبِّهِ أَحَدًا ﴿١١٠﴾
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
                Segala puji bagi Allah yang telah menurunkan kepada hamba-Nya Al Kitab (Al-Quran) dan Dia tidak mengadakan kebengkokan di dalamnya;
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>2. </Text>
                sebagai bimbingan yang lurus, untuk memperingatkan siksaan yang sangat pedih dari sisi Allah dan memberi berita gembira kepada orang-orang yang beriman, yang mengerjakan amal saleh, bahwa mereka akan mendapat pembalasan yang baik,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>3. </Text>
                mereka kekal di dalamnya untuk selama-lamanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>4. </Text>
                Dan untuk memperingatkan kepada orang-orang yang berkata: "Allah mengambil seorang anak".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>5. </Text>
                Mereka sekali-kali tidak mempunyai pengetahuan tentang hal itu, begitu pula nenek moyang mereka. Alangkah buruknya kata-kata yang keluar dari mulut mereka; mereka tidak mengatakan (sesuatu) kecuali dusta.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>6. </Text>
                Maka (apakah) barangkali kamu akan membunuh dirimu karena bersedih hati setelah mereka berpaling, sekiranya mereka tidak beriman kepada keterangan ini (Al-Quran).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>7. </Text>
                Sesungguhnya Kami telah menjadikan apa yang di bumi sebagai perhiasan baginya, agar Kami menguji mereka siapakah di antara mereka yang terbaik perbuatannya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>8. </Text>
                Dan sesungguhnya Kami benar-benar akan menjadikan (pula) apa yang di atasnya menjadi tanah rata lagi tandus.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>9. </Text>
                Atau kamu mengira bahwa orang-orang yang mendiami gua dan (yang mempunyai) raqim itu, mereka termasuk tanda-tanda kekuasaan Kami yang mengherankan?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>10. </Text>
                (Ingatlah) tatkala para pemuda itu mencari tempat berlindung ke dalam gua, lalu mereka berdoa: "Wahai Tuhan kami, berikanlah rahmat kepada kami dari sisi-Mu dan sempurnakanlah bagi kami petunjuk yang lurus dalam urusan kami (ini)".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>11. </Text>
                Maka Kami tutup telinga mereka beberapa tahun dalam gua itu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>12. </Text>
                Kemudian Kami bangunkan mereka, agar Kami mengetahui manakah di antara kedua golongan itu] yang lebih tepat dalam menghitung berapa lama mereka tinggal (dalam gua itu).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>13. </Text>
                Kami kisahkan kepadamu (Muhammad) cerita ini dengan benar. Sesungguhnya mereka adalah pemuda-pemuda yang beriman kepada Tuhan mereka, dan Kami tambah pula untuk mereka petunjuk.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>14. </Text>
                Dan Kami meneguhkan hati mereka diwaktu mereka berdiri, lalu mereka pun berkata, "Tuhan kami adalah Tuhan seluruh langit dan bumi; kami sekali-kali tidak menyeru Tuhan selain Dia, sesungguhnya kami kalau demikian telah mengucapkan perkataan yang amat jauh dari kebenaran".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>15. </Text>
                Kaum kami ini telah menjadikan selain Dia sebagai tuhan-tuhan (untuk disembah). Mengapa mereka tidak mengemukakan alasan yang terang (tentang kepercayaan mereka)? Siapakah yang lebih zalim daripada orang-orang yang mengada-adakan kebohongan terhadap Allah?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>16. </Text>
                Dan apabila kamu meninggalkan mereka dan apa yang mereka sembah selain Allah, maka carilah tempat berlindung ke dalam gua itu, niscaya Tuhanmu akan melimpahkan sebagian rahmat-Nya kepadamu dan menyediakan sesuatu yang berguna bagimu dalam urusan kamu.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>17. </Text>
                Dan kamu akan melihat matahari ketika terbit, condong dari gua mereka ke sebelah kanan, dan bila matahari terbenam menjauhi mereka ke sebelah kiri sedang mereka berada dalam tempat yang luas dalam gua itu. Itu adalah sebagian dari tanda-tanda (kebesaran) Allah. Barangsiapa yang diberi petunjuk oleh Allah, maka dialah yang mendapat petunjuk; dan barangsiapa yang disesatkan-Nya, maka kamu tidak akan mendapatkan seorang pemimpinpun yang dapat memberi petunjuk kepadanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>18. </Text>
                Dan kamu mengira mereka itu bangun, padahal mereka tidur; Dan kami balik-balikkan mereka ke kanan dan ke kiri, sedang anjing mereka mengunjurkan kedua lengannya di muka pintu gua. Dan jika kamu menyaksikan mereka tentulah kamu akan berpaling dari mereka dengan melarikan diri dan tentulah (hati) kamu akan dipenuhi oleh ketakutan terhadap mereka.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>19. </Text>
                Dan demikianlah Kami bangunkan mereka agar mereka saling bertanya di antara mereka sendiri. Berkatalah salah seorang di antara mereka: Sudah berapa lamakah kamu berada (disini?)". Mereka menjawab: "Kita berada (disini) sehari atau setengah hari". Berkata (yang lain lagi): "Tuhan kamu lebih mengetahui berapa lamanya kamu berada (di sini). Maka suruhlah salah seorang di antara kamu untuk pergi ke kota dengan membawa uang perakmu ini, dan hendaklah dia lihat manakah makanan yang lebih baik, maka hendaklah ia membawa makanan itu untukmu, dan hendaklah ia berlaku lemah-lembut dan janganlah sekali-kali menceritakan halmu kepada seorangpun.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>20. </Text>
                Sesungguhnya jika mereka dapat mengetahui tempatmu, niscaya mereka akan melempar kamu dengan batu, atau memaksamu kembali kepada agama mereka, dan jika demikian niscaya kamu tidak akan beruntung selama lamanya".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>21. </Text>
                Dan demikian (pula) Kami mempertemukan (manusia) dengan mereka, agar manusia itu mengetahui, bahwa janji Allah itu benar, dan bahwa kedatangan hari kiamat tidak ada keraguan padanya. Ketika orang-orang itu berselisih tentang urusan mereka, orang-orang itu berkata: "Dirikan sebuah bangunan di atas (gua) mereka, Tuhan mereka lebih mengetahui tentang mereka". Orang-orang yang berkuasa atas urusan mereka berkata: "Sesungguhnya kami akan mendirikan sebuah rumah peribadatan di atasnya".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>22. </Text>
                Nanti (ada orang yang akan) mengatakan (jumlah mereka) adalah tiga orang yang keempat adalah anjingnya, dan (yang lain) mengatakan: "(jumlah mereka) adalah lima orang yang keenam adalah anjing nya", sebagai terkaan terhadap barang yang gaib; dan (yang lain lagi) mengatakan: "(jumlah mereka) tujuh orang, yang ke delapan adalah anjingnya". Katakanlah: "Tuhanku lebih mengetahui jumlah mereka; tidak ada orang yang mengetahui (bilangan) mereka kecuali sedikit". Karena itu janganlah kamu (Muhammad) bertengkar tentang hal mereka, kecuali pertengkaran lahir saja dan jangan kamu menanyakan tentang mereka (pemuda-pemuda itu) kepada seorangpun di antara mereka.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>23. </Text>
                Dan jangan sekali-kali kamu mengatakan tentang sesuatu: "Sesungguhnya aku akan mengerjakan ini besok pagi,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>24. </Text>
                kecuali (dengan menyebut): "Insya Allah". Dan ingatlah kepada Tuhanmu jika kamu lupa dan katakanlah: "Mudah-mudahan Tuhanku akan memberiku petunjuk kepada yang lebih dekat kebenarannya dari pada ini".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>25. </Text>
                Dan mereka tinggal dalam gua mereka tiga ratus tahun dan ditambah sembilan tahun (lagi).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>26. </Text>
                Katakanlah: "Allah lebih mengetahui berapa lamanya mereka tinggal (di gua); kepunyaan-Nya-lah semua yang tersembunyi di langit dan di bumi. Alangkah terang penglihatan-Nya dan alangkah tajam pendengaran-Nya; tak ada seorang pelindungpun bagi mereka selain dari pada-Nya; dan Dia tidak mengambil seorangpun menjadi sekutu-Nya dalam menetapkan keputusan".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>27. </Text>
                Dan bacakanlah apa yang diwahyukan kepadamu, yaitu kitab Tuhanmu (Al Quran). Tidak ada (seorangpun) yang dapat merubah kalimat-kalimat-Nya. Dan kamu tidak akan dapat menemukan tempat berlindung selain dari pada-Nya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>28. </Text>
                Dan bersabarlah kamu bersama-sama dengan orang-orang yang menyeru Tuhannya di pagi dan senja hari dengan mengharap keridhaan-Nya; dan janganlah kedua matamu berpaling dari mereka (karena) mengharapkan perhiasan dunia ini; dan janganlah kamu mengikuti orang yang hatinya telah Kami lalaikan dari mengingati Kami, serta menuruti hawa nafsunya dan adalah keadaannya itu melewati batas.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>29. </Text>
                Dan katakanlah: "Kebenaran itu datangnya dari Tuhanmu; maka barangsiapa yang ingin (beriman) hendaklah ia beriman, dan barangsiapa yang ingin (kafir) biarlah ia kafir". Sesungguhnya Kami telah sediakan bagi orang orang zalim itu neraka, yang gejolaknya mengepung mereka. Dan jika mereka meminta minum, niscaya mereka akan diberi minum dengan air seperti besi yang mendidih yang menghanguskan muka. Itulah minuman yang paling buruk dan tempat istirahat yang paling jelek. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>30. </Text>
                Sesunggunya mereka yang beriman dan beramal saleh, tentulah Kami tidak akan menyia-nyiakan pahala orang-orang yang mengerjakan amalan(nya) dengan yang baik.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>31. </Text>
                Mereka itulah (orang-orang yang) bagi mereka surga 'Adn, mengalir sungai-sungai di bawahnya; dalam surga itu mereka dihiasi dengan gelang mas dan mereka memakai pakaian hijau dari sutera halus dan sutera tebal, sedang mereka duduk sambil bersandar di atas dipan-dipan yang indah. Itulah pahala yang sebaik-baiknya, dan tempat istirahat yang indah;
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>32. </Text>
                Dan berikanlah kepada mereka sebuah perumpamaan dua orang laki-laki, Kami jadikan bagi seorang di antara keduanya (yang kafir) dua buah kebun anggur dan kami kelilingi kedua kebun itu dengan pohon-pohon korma dan di antara kedua kebun itu Kami buatkan ladang.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>33. </Text>
                Kedua buah kebun itu menghasilkan buahnya, dan kebun itu tiada kurang buahnya sedikitpun, dan Kami alirkan sungai di celah-celah kedua kebun itu,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>34. </Text>
                dan dia mempunyai kekayaan besar, maka ia berkata kepada kawannya (yang mukmin) ketika bercakap-cakap dengan dia: "Hartaku lebih banyak dari pada hartamu dan pengikut-pengikutku lebih kuat"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>35. </Text>
                Dan dia memasuki kebunnya sedang dia zalim terhadap dirinya sendiri; ia berkata: "Aku kira kebun ini tidak akan binasa selama-lamanya,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>36. </Text>
                dan aku tidak mengira hari kiamat itu akan datang, dan jika sekiranya aku kembalikan kepada Tuhanku, pasti aku akan mendapat tempat kembali yang lebih baik dari pada kebun-kebun itu".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>37. </Text>
                Kawannya (yang mukmin) berkata kepadanya -- sedang dia bercakap-cakap dengannya: "Apakah kamu kafir kepada (Tuhan) yang menciptakan kamu dari tanah, kemudian dari setetes air mani, lalu Dia menjadikan kamu seorang laki-laki yang sempurna?
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>38. </Text>
                Tetapi aku (percaya bahwa): Dialah Allah, Tuhanku, dan aku tidak mempersekutukan seorangpun dengan Tuhanku.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>39. </Text>
                Dan mengapa kamu tidak mengatakan waktu kamu memasuki kebunmu "maasyaallaah, laa quwwata illaa billaah (sungguh atas kehendak Allah semua ini terwujud, tiada kekuatan kecuali dengan pertolongan Allah). Sekiranya kamu anggap aku lebih sedikit darimu dalam hal harta dan keturunan,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>40. </Text>
                maka mudah-mudahan Tuhanku, akan memberi kepadaku (kebun) yang lebih baik dari pada kebunmu (ini); dan mudah-mudahan Dia mengirimkan ketentuan (petir) dari langit kepada kebunmu; hingga (kebun itu) menjadi tanah yang licin;
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>41. </Text>
                atau airnya menjadi surut ke dalam tanah, maka sekali-kali kamu tidak dapat menemukannya lagi".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>42. </Text>
                Dan harta kekayaannya dibinasakan; lalu ia membulak-balikkan kedua tangannya (tanda menyesal) terhadap apa yang ia telah belanjakan untuk itu, sedang pohon anggur itu roboh bersama para-paranya dan dia berkata: "Aduhai kiranya dulu aku tidak mempersekutukan seorangpun dengan Tuhanku". 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>43. </Text>
                Dan tidak ada bagi dia segolonganpun yang akan menolongnya selain Allah; dan sekali-kali ia tidak dapat membela dirinya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>44. </Text>
                Di sana pertolongan itu hanya dari Allah Yang Hak. Dia adalah sebaik-baik Pemberi pahala dan sebaik-baik Pemberi balasan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>45. </Text>
                Dan berilah perumpamaan kepada mereka (manusia), kehidupan dunia sebagai air hujan yang Kami turunkan dari langit, maka menjadi subur karenanya tumbuh-tumbuhan di muka bumi, kemudian tumbuh-tumbuhan itu menjadi kering yang diterbangkan oleh angin. Dan adalah Allah, Maha Kuasa atas segala sesuatu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>46. </Text>
                Harta dan anak-anak adalah perhiasan kehidupan dunia tetapi amalan-amalan yang kekal lagi saleh adalah lebih baik pahalanya di sisi Tuhanmu serta lebih baik untuk menjadi harapan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>47. </Text>
                Dan (ingatlah) akan hari (yang ketika itu) Kami perjalankan gunung-gunung dan kamu akan dapat melihat bumi itu datar dan Kami kumpulkan seluruh manusia, dan tidak kami tinggalkan seorangpun dari mereka.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>48. </Text>
                Dan mereka akan dibawa ke hadapan Tuhanmu dengan berbaris. Sesungguhnya kamu datang kepada Kami, sebagaimana Kami menciptakan kamu pada kali yang pertama; bahkan kamu mengatakan bahwa Kami sekali-kali tidak akan menetapkan bagi kamu waktu (memenuhi) perjanjian.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>49. </Text>
                Dan diletakkanlah kitab, lalu kamu akan melihat orang-orang bersalah ketakutan terhadap apa yang (tertulis) di dalamnya, dan mereka berkata: "Aduhai celaka kami, kitab apakah ini yang tidak meninggalkan yang kecil dan tidak (pula) yang besar, melainkan ia mencatat semuanya; dan mereka dapati apa yang telah mereka kerjakan ada (tertulis). Dan Tuhanmu tidak menganiaya seorang juapun".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>50. </Text>
                Dan (ingatlah) ketika Kami berfirman kepada para malaikat: "Sujudlah kamu kepada Adam, maka sujudlah mereka kecuali Iblis. Dia adalah dari golongan jin, maka ia mendurhakai perintah Tuhannya. Patutkah kamu mengambil dia dan turanan-turunannya sebagai pemimpin selain daripada-Ku, sedang mereka adalah musuhmu? Amat buruklah iblis itu sebagai pengganti (dari Allah) bagi orang-orang yang zalim.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>51. </Text>
                Aku tidak menghadirkan mereka (iblis dan anak cucunya) untuk menyaksikan penciptaan langit dan bumi dan tidak (pula) penciptaan diri mereka sendiri; dan tidaklah Aku mengambil orang-orang yang menyesatkan itu sebagai penolong.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>52. </Text>
                Dan (ingatlah) akan hari (yang ketika itu) Dia berfirman: "Serulah olehmu sekalian sekutu-sekutu-Ku yang kamu katakan itu". Mereka lalu memanggilnya tetapi sekutu-sekutu itu tidak membalas seruan mereka dan Kami adakan untuk mereka tempat kebinasaan (neraka).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>53. </Text>
                Dan orang-orang yang berdosa melihat neraka, maka mereka meyakini, bahwa mereka akan jatuh ke dalamnya dan mereka tidak menemukan tempat berpaling dari padanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>54. </Text>
                Dan sesungguhnya Kami telah mengulang-ulangi bagi manusia dalam Al Quran ini bermacam-macam perumpamaan. Dan manusia adalah makhluk yang paling banyak membantah. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>55. </Text>
                Dam tidak ada sesuatupun yang menghalangi manusia dari beriman, ketika petunjuk telah datang kepada mereka, dan dari memohon ampun kepada Tuhannya, kecuali (keinginan menanti) datangnya hukum (Allah yang telah berlalu pada) umat-umat yang dahulu atau datangnya azab atas mereka dengan nyata.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>56. </Text>
                Dan tidaklah Kami mengutus rasul-rasul hanyalah sebagai pembawa berita gembira dan sebagai pemberi peringatan; tetapi orang-orang yang kafir membantah dengan yang batil agar dengan demikian mereka dapat melenyap kan yang hak, dan mereka menganggap ayat-ayat kami dan peringatan-peringatan terhadap mereka sebagai olok-olokan.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>57. </Text>
                Dan siapakah yang lebih zalim dari pada orang yang telah diperingatkan dengan ayat-ayat Tuhannya lalu dia berpaling dari padanya dan melupakan apa yang telah dikerjakan oleh kedua tangannya? Sesungguhnya Kami telah meletakkan tutupan di atas hati mereka, (sehingga mereka tidak) memahaminya, dan (Kami letakkan pula) sumbatan di telinga mereka; dan kendatipun kamu menyeru mereka kepada petunjuk, niscaya mereka tidak akan mendapat petunjuk selama-lamanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>58. </Text>
                Dan Tuhanmulah yang Maha Pengampun, lagi mempunyai rahmat. Jika Dia mengazab mereka karena perbuatan mereka, tentu Dia akan menyegerakan azab bagi mereka. Tetapi bagi mereka ada waktu yang tertentu (untuk mendapat azab) yang mereka sekali-kali tidak akan menemukan tempat berlindung dari padanya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>59. </Text>
                Dan (penduduk) negeri telah Kami binasakan ketika mereka berbuat zalim, dan telah Kami tetapkan waktu tertentu bagi kebinasaan mereka.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>60. </Text>
                Dan (ingatlah) ketika Musa berkata kepada muridnya: "Aku tidak akan berhenti (berjalan) sebelum sampai ke pertemuan dua buah lautan; atau aku akan berjalan sampai bertahun-tahun". 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>61. </Text>
                Maka tatkala mereka sampai ke pertemuan dua buah laut itu, mereka lalai akan ikannya, lalu ikan itu melompat mengambil jalannya ke laut itu.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>62. </Text>
                Maka tatkala mereka berjalan lebih jauh, berkatalah Musa kepada muridnya: "Bawalah kemari makanan kita; sesungguhnya kita telah merasa letih karena perjalanan kita ini".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>63. </Text>
                Muridnya menjawab: "Tahukah kamu tatkala kita mencari tempat berlindung di batu tadi, maka sesungguhnya aku lupa (menceritakan tentang) ikan itu dan tidak adalah yang melupakan aku untuk menceritakannya kecuali syaitan dan ikan itu mengambil jalannya ke laut dengan cara yang aneh sekali". 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>64. </Text>
                Musa berkata: "Itulah (tempat) yang kita cari". Lalu keduanya kembali, mengikuti jejak mereka semula.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>65. </Text>
                Lalu mereka bertemu dengan seorang hamba di antara hamba-hamba Kami, yang telah Kami berikan kepadanya rahmat dari sisi Kami, dan yang telah Kami ajarkan kepadanya ilmu dari sisi Kami.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>66. </Text>
                Musa berkata kepada Khidhr: "Bolehkah aku mengikutimu supaya kamu mengajarkan kepadaku ilmu yang benar di antara ilmu-ilmu yang telah diajarkan kepadamu?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>67. </Text>
                Dia menjawab: "Sesungguhnya kamu sekali-kali tidak akan sanggup sabar bersama aku.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>68. </Text>
                Dan bagaimana kamu dapat sabar atas sesuatu, yang kamu belum mempunyai pengetahuan yang cukup tentang hal itu?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>69. </Text>
                Musa berkata: "Insya Allah kamu akan mendapati aku sebagai orang yang sabar, dan aku tidak akan menentangmu dalam sesuatu urusanpun".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>70. </Text>
                Dia berkata: "Jika kamu mengikutiku, maka janganlah kamu menanyakan kepadaku tentang sesuatu apapun, sampai aku sendiri menerangkannya kepadamu".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>71. </Text>
                Maka berjalanlah keduanya, hingga tatkala keduanya menaiki perahu lalu Khidhr melobanginya. Musa berkata: "Mengapa kamu melobangi perahu itu akibatnya kamu menenggelamkan penumpangnya?" Sesungguhnya kamu telah berbuat sesuatu kesalahan yang besar.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>72. </Text>
                Dia (Khidhr) berkata: "Bukankah aku telah berkata: "Sesungguhnya kamu sekali-kali tidak akan sabar bersama dengan aku".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>73. </Text>
                Musa berkata: "Janganlah kamu menghukum aku karena kelupaanku dan janganlah kamu membebani aku dengan sesuatu kesulitan dalam urusanku".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>74. </Text>
                Maka berjalanlah keduanya; hingga tatkala keduanya berjumpa dengan seorang anak, maka Khidhr membunuhnya. Musa berkata: "Mengapa kamu membunuh jiwa yang bersih, bukan karena dia membunuh orang lain? Sesungguhnya kamu telah melakukan suatu yang mungkar".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>75. </Text>
                Khidhr berkata: "Bukankah sudah kukatakan kepadamu, bahwa sesungguhnya kamu tidak akan dapat sabar bersamaku?"
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>76. </Text>
                Musa berkata: "Jika aku bertanya kepadamu tentang sesuatu sesudah (kali) ini, maka janganlah kamu memperbolehkan aku menyertaimu, sesungguhnya kamu sudah cukup memberikan uzur padaku".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>77. </Text>
                Maka keduanya berjalan; hingga tatkala keduanya sampai kepada penduduk suatu negeri, mereka minta dijamu kepada penduduk negeri itu, tetapi penduduk negeri itu tidak mau menjamu mereka, kemudian keduanya mendapatkan dalam negeri itu dinding rumah yang hampir roboh, maka Khidhr menegakkan dinding itu. Musa berkata: "Jikalau kamu mau, niscaya kamu mengambil upah untuk itu".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>78. </Text>
                Khidhr berkata: "Inilah perpisahan antara aku dengan kamu; kelak akan kuberitahukan kepadamu tujuan perbuatan-perbuatan yang kamu tidak dapat sabar terhadapnya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>79. </Text>
                Adapun bahtera itu adalah kepunyaan orang-orang miskin yang bekerja di laut, dan aku bertujuan merusakkan bahtera itu, karena di hadapan mereka ada seorang raja yang merampas tiap-tiap bahtera.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>80. </Text>
                Dan adapun anak muda itu, maka keduanya adalah orang-orang mukmin, dan kami khawatir bahwa dia akan mendorong kedua orang tuanya itu kepada kesesatan dan kekafiran.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>81. </Text>
                Dan kami menghendaki, supaya Tuhan mereka mengganti bagi mereka dengan anak lain yang lebih baik kesuciannya dari anaknya itu dan lebih dalam kasih sayangnya (kepada ibu bapaknya).
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>82. </Text>
                Adapun dinding rumah adalah kepunyaan dua orang anak yatim di kota itu, dan di bawahnya ada harta benda simpanan bagi mereka berdua, sedang ayahnya adalah seorang yang saleh, maka Tuhanmu menghendaki agar supaya mereka sampai kepada kedewasaannya dan mengeluarkan simpanannya itu, sebagai rahmat dari Tuhanmu; dan bukanlah aku melakukannya itu menurut kemauanku sendiri. Demikian itu adalah tujuan perbuatan-perbuatan yang kamu tidak dapat sabar terhadapnya".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>83. </Text>
                Mereka akan bertanya kepadamu (Muhammad) tentang Dzulkarnain. Katakanlah: "Aku akan bacakan kepadamu cerita tantangnya".
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>84. </Text>
                Sesungguhnya Kami telah memberi kekuasaan kepadanya di (muka) bumi, dan Kami telah memberikan kepadanya jalan (untuk mencapai) segala sesuatu,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>85. </Text>
                maka diapun menempuh suatu jalan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>86. </Text>
                Hingga apabila dia telah sampai ketempat terbenam matahari, dia melihat matahari terbenam di dalam laut yang berlumpur hitam, dan dia mendapati di situ segolongan umat. Kami berkata: "Hai Dzulkarnain, kamu boleh menyiksa atau boleh berbuat kebaikan terhadap mereka. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>87. </Text>
                Berkata Dzulkarnain: "Adapun orang yang aniaya, maka kami kelak akan mengazabnya, kemudian dia kembalikan kepada Tuhannya, lalu Tuhan mengazabnya dengan azab yang tidak ada taranya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>88. </Text>
                Adapun orang-orang yang beriman dan beramal saleh, maka baginya pahala yang terbaik sebagai balasan, dan akan kami titahkan kepadanya (perintah) yang mudah dari perintah-perintah kami".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>89. </Text>
                Kemudian dia menempuh jalan (yang lain). 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>90. </Text>
                Hingga apabila dia telah sampai ke tempat terbit matahari (sebelah Timur) dia mendapati matahari itu menyinari segolongan umat yang Kami tidak menjadikan bagi mereka sesuatu yang melindunginya dari (cahaya) matahari itu,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>91. </Text>
                demikianlah. dan sesungguhnya ilmu Kami meliputi segala apa yang ada padanya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>92. </Text>
                Kemudian dia menempuh suatu jalan (yang lain lagi).
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>93. </Text>
                Hingga apabila dia telah sampai di antara dua buah gunung, dia mendapati di hadapan kedua bukit itu suatu kaum yang hampir tidak mengerti pembicaraan.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>94. </Text>
                Mereka berkata: "Hai Dzulkarnain, sesungguhnya Ya'juj dan Ma'juj itu orang-orang yang membuat kerusakan di muka bumi, maka dapatkah kami memberikan sesuatu pembayaran kepadamu, supaya kamu membuat dinding antara kami dan mereka?"
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>95. </Text>
                Dzulkarnain berkata: "Apa yang telah dikuasakan oleh Tuhanku kepadaku terhadapnya adalah lebih baik, maka tolonglah aku dengan kekuatan (manusia dan alat-alat), agar aku membuatkan dinding antara kamu dan mereka,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>96. </Text>
                berilah aku potongan-potongan besi". Hingga apabila besi itu telah sama rata dengan kedua (puncak) gunung itu, berkatalah Dzulkarnain: "Tiuplah (api itu)". Hingga apabila besi itu sudah menjadi (merah seperti) api, diapun berkata: "Berilah aku tembaga (yang mendidih) agar aku kutuangkan ke atas besi panas itu".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>97. </Text>
                Maka mereka tidak bisa mendakinya dan mereka tidak bisa (pula) melobanginya.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>98. </Text>
                Dzulkarnain berkata: "Ini (dinding) adalah rahmat dari Tuhanku, maka apabila sudah datang janji Tuhanku, Dia akan menjadikannya hancur luluh; dan janji Tuhanku itu adalah benar".
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>99. </Text>
                Kami biarkan mereka di hari itu bercampur aduk antara satu dengan yang lain, kemudian ditiup lagi sangkakala, lalu Kami kumpulkan mereka itu semuanya,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>100. </Text>
                dan Kami nampakkan Jahannam pada hari itu kepada orang-orang kafir dengan jelas,
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>101. </Text>
                yaitu orang-orang yang matanya dalam keadaan tertutup dari memperhatikan tanda-tanda kebesaran-Ku, dan adalah mereka tidak sanggup mendengar. 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>102. </Text>
                maka apakah orang-orang kafir menyangka bahwa mereka (dapat) mengambil hamba-hamba-Ku menjadi penolong selain Aku? Sesungguhnya Kami telah menyediakan neraka Jahannam tempat tinggal bagi orang-orang kafir.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>103. </Text>
                Katakanlah: "Apakah akan Kami beritahukan kepadamu tentang orang-orang yang paling merugi perbuatannya?"
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>104. </Text>
                Yaitu orang-orang yang telah sia-sia perbuatannya dalam kehidupan dunia ini, sedangkan mereka menyangka bahwa mereka berbuat sebaik-baiknya. 
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>105. </Text>
                Mereka itu orang-orang yang telah kufur terhadap ayat-ayat Tuhan mereka dan (kufur terhadap) perjumpaan dengan Dia, maka hapuslah amalan-amalan mereka, dan Kami tidak mengadakan suatu penilaian bagi (amalan) mereka pada hari kiamat.
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>106. </Text>
                Demikianlah balasan mereka itu neraka Jahannam, disebabkan kekafiran mereka dan disebabkan mereka menjadikan ayat-ayat-Ku dan rasul-rasul-Ku sebagai olok-olok.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>107. </Text>
                Sesungguhnya orang-orang yang beriman dan beramal saleh, bagi mereka adalah surga Firdaus menjadi tempat tinggal,
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>108. </Text>
                mereka kekal di dalamnya, mereka tidak ingin berpindah dari padanya.
              </Text>
            </View>
            <View style={style.contentA}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>109. </Text>
                Katakanlah: Sekiranya lautan menjadi tinta untuk (menulis) kalimat-kalimat Tuhanku, sungguh habislah lautan itu sebelum habis (ditulis) kalimat-kalimat Tuhanku, meskipun Kami datangkan tambahan sebanyak itu (pula)". 
              </Text>
            </View>
            <View style={style.contentB}>
              <Text style={style.innerText}>
                <Text style={{fontWeight: 'bold'}}>110. </Text>
                Katakanlah: Sesungguhnya aku ini manusia biasa seperti kamu, yang diwahyukan kepadaku: "Bahwa sesungguhnya Tuhan kamu itu adalah Tuhan yang Esa". Barangsiapa mengharap perjumpaan dengan Tuhannya, maka hendaklah ia mengerjakan amal yang saleh dan janganlah ia mempersekutukan seorangpun dalam beribadat kepada Tuhannya".
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
