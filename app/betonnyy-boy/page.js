'use client'

// app/betonnyy-boy/page.js
export default function BetonnyyBoyPage() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <h1>Как я укреплял участок бетонным боем вместо газона</h1>
      
      {/* ФОТО АВТОРА */}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img 
          src="https://raw.githubusercontent.com/Bessonina/devdock-site/refs/heads/main/public/video/header.png" 
          alt="Самостройщик с дивана на фоне стройки" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            objectFit: 'cover', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }} 
          onClick={(e) => window.open(e.target.src, '_blank')}
        />
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Самостройщик с дивана на фоне стройки. Всё по-честному.
        </figcaption>
      </figure>
      
      <p><strong>Всем привет!</strong> Я самостройщик с дивана. По сути, я — это ты. Потому что всё, что сделал я, сможешь сделать и ты, раз у тебя есть доступ к интернету, голова и руки.</p>

      <p>У меня уже был участок и дом, и этот опыт я считаю неуспешным. Я строил всё сам по роликам с одного известного видеохостинга имя которого нельзя поминать в суе, по сути, и многое там было сделано с косяками. Именно их я хочу учесть при новом строительстве.</p>

      <h2>Почему я вообще это затеял</h2>
      <p>Когда я купил участок, он не был болотом, но после дождей и особенно весной вода стояла и никуда не уходила. Позже выяснилось — под тонким слоем земли почти 5 метров глины. Вода просто не могла впитаться.</p>

      <p>До этого у меня уже был участок, где я мучился с травой. Это был не газон, а так, жидкая травушка с сорняками, которую надо косить. И тут я понял: я не хочу снова проходить через эту историю. Вспашка, посадка, вечная борьба с сорняками — короче, газон — это геморрой, который мне не нужен.</p>

      <p>Поэтому я решил: снимаю весь плодородный слой и засыпаю участок гравийным щебнем. Позже, если захочу газончики или клумбы, просто сделаю локальные "островки": огорожу место и завезу чернозём. А где нужно — вымощу дорожки уже под будущие постройки.</p>

      {/* ВИДЕО 1: Снятие плодородного слоя */}
      <figure style={{ margin: '20px 0' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/snyatie_plodorodki.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>Снятие плодородного слоя трактором-грейдером</figcaption>
      </figure>

      <h2>Почему бетонный бой, а не щебень?</h2>
      <p>Всё просто: бетонный бой — гораздо дешевле. Мне нужно было 85 кубов на засыпку всего участка. Отдал я за это 240 000 рублей. Из них только 90 000 — сам бой, всё остальное — доставка. Логика была железная.</p>

      <h2>Технология: делаем "пирог"</h2>
      <p>Чтобы бетонный бой не ушёл в глину, я постелил геотекстиль «Дорнит» 400-й плотности. Материал очень прочный — по нему свободно ездили КАМАЗы, трактора и краны. Всё выдержал. Я пришпилил его колышками, но они не помогли — нахлесты геотекстиля всё равно разъехались. Тогда я подумал: "Ну, ерунда", и забил. А зря, как оказалось.</p>

      {/* ФОТО РУЛОНОВ ДОРНИТА */}
      <figure style={{ margin: '20px 0', textAlign: 'center' }}>
        <img 
          src="https://raw.githubusercontent.com/Bessonina/devdock-site/refs/heads/main/public/video/dornit_ruloni.jpg" 
          alt="Рулоны геотекстиля Дорнит на участке" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            objectFit: 'cover', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer'
          }} 
          onClick={(e) => window.open(e.target.src, '_blank')}
        />
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>
          Рулоны геотекстиля «Дорнит» ждут своего часа на участке
        </figcaption>
      </figure>

      <figure style={{ margin: '20px 0' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/raskataniy_dornit.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>Раскатка геотекстиля «Дорнит» по участку</figcaption>
      </figure>

      <p>Перед геотекстилем я обработал землю пестицидом. Зашёл в "Леруа Мерлен" и сказал: "Дайте то, что убьёт всё, чтобы даже семена не взошли". Это не помогло. Через неделю после обработки на голой земле уже торчали новые ростки борщевика. А потом они уже под геотекстилем умудрялись поднимать его холмиками, пока их не задавил бетонный бой.</p>

      {/* НОВОЕ ВИДЕО: Обработка участка гербицидом */}
      <figure style={{ margin: '20px 0' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/gerbicid.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>Обработка участка гербицидом для уничтожения сорняков и борщевика</figcaption>
      </figure>

      <h2>Процесс и машины</h2>
      <p>Бетонный бой засыпали. Трактор разровнял (10 000 рублей), потом я утрамбовал площадку катком (25 000 рублей). Соседи и проезжающие строители постоянно подходили: "Что ты тут делаешь? Мы никогда не видели, чтобы на личном участке так делали". Я шутил: "Парковку делаю". А потом объяснял, что не хочу газон.</p>

      <figure style={{ margin: '20px 0' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/traktor_beton.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>Трактор разравнивает бетонный бой</figcaption>
      </figure>

      <h2>А потом пришли кроты</h2>
      <p>В местах, где геотекстиль разошёлся, появились кроты. Они каким-то чутьём находили эти дыры, раздвигали бетонный бой и выкидывали наверх кучи земли! Всё моё желание избавиться от земли пошло прахом. Теперь по всему участку горки земли, и в них уже всходят семена.</p>

      <p>Мы заливали в норы дёготь — вроде помогло. Теперь они не выходят на открытое пространство, но зато роют под морским контейнером, который стоит на блоках. Это уже не так критично, но осадочек, конечно, остался.</p>

      <figure style={{ margin: '20px 0' }}>
        <video 
          controls 
          preload="metadata" 
          style={{ 
            width: '100%', 
            maxWidth: '800px', 
            height: 'auto', 
            maxHeight: '450px', 
            borderRadius: '8px', 
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#000'
          }}
        >
          <source src="https://raw.githubusercontent.com/Bessonina/devdock-site/main/public/video/kroti.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <figcaption style={{ textAlign: 'center', fontSize: '0.9rem', color: '#555', marginTop: '8px' }}>Результат диверсии кротов на участке</figcaption>
      </figure>

      <h2>Что я понял и что посоветую</h2>
      <p>Если бы я знал про кротов, я бы перед укладкой геотекстиля постелил мелкоячеистую сетку от грызунов. Это бы решило проблему на корню. Так что мой главный совет: если будете повторять мой опыт — не поленитесь, постелите сетку сначала. Потом будет уже поздно, как у меня.</p>

      <h2>Как выглядит сейчас и что в планах</h2>
      <p>Сейчас мой участок выглядит как обычная, хорошо сделанная парковка. Декоративный гравийный щебень сверху я пока не клал — нет денег. Но в планах это сделать. Вода уходит нормально, хотя внизу она стоит, и когда раскапываешь бой, чувствуется запах гнилой земли. Для моих свайных фундаментов это не страшно.</p>

      <p>В целом, решение было правильным. Но теперь у меня есть для вас один железный совет: <strong>обязательно сетка от кротов!</strong> Не повторяйте мою ошибку.</p>

    </main>
  );
}
