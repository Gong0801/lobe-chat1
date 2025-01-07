import { createStyles } from 'antd-style';
import React from 'react';
import { Trans } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

const useStyles = createStyles(({ css, token }) => ({
  container: css`
    font-size: 12px;
    color: ${token.colorTextTertiary};
  `,

  paragraph: css`
    justify-content: center;
    width: 100%;

    kbd {
      margin-inline: 2px;
      padding-inline: 6px;
      border-radius: 4px;
      background: ${token.colorFillTertiary};
    }
  `,
}));
const EmptyStatus = () => {
  const { styles } = useStyles();
  return (
    <Flexbox
      align={'flex-end'}
      className={styles.container}
      gap={12}
      paddingInline={20}
      width={'100%'}
    >
      <svg
        fill="currentColor"
        fillRule="evenodd"
        style={{ flex: 'none', height: 'fit-content', lineHeight: 1 }}
        viewBox="0 0 126 64"
        width={130}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.5 63a.5.5 0 001 0h-1zM122 1l-2.887 5h5.774L122 1zM1.5 62.042a.5.5 0 10-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 101 0h-1zm1-1.916a.5.5 0 10-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 101 0h-1zm1.063-1.938a.5.5 0 10-.991-.13l.991.13zm-.418-2.274a.5.5 0 00.924.383l-.924-.383zm1.904-1.312a.5.5 0 10-.793-.609l.793.61zm.776-2.178a.5.5 0 00.61.793l-.61-.793zm2.304-.187a.5.5 0 00-.383-.924l.383.924zm1.761-1.497a.5.5 0 00.13.991l-.13-.991zm2.12.928a.5.5 0 100-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 000-1v1zm2.018-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.019-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.018-1a.5.5 0 100 1v-1zm2.02 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.018-1a.5.5 0 100 1v-1zm2.02 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 000-1v1zm2.018-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 100-1v1zm2.019-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.02-1a.5.5 0 100 1v-1zm2.018 1a.5.5 0 100-1v1zm2.02-1a.5.5 0 100 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.02 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.019 1a.5.5 0 000-1v1zm2.019-1a.5.5 0 000 1v-1zm2.12.928a.501.501 0 00-.13-.991l.13.991zm1.761-1.497a.501.501 0 00.383.924l-.383-.924zm2.304-.187a.5.5 0 00-.609-.793l.609.793zm.776-2.178a.5.5 0 10.793.609l-.793-.61zm1.904-1.312a.5.5 0 10-.924-.383l.924.383zm-.418-2.274a.5.5 0 10.991.13l-.991-.13zm1.063-1.938a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.916a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.916a.5.5 0 001 0h-1zm1-1.917a.5.5 0 00-1 0h1zm-1-1.917a.5.5 0 001 0h-1zM1.5 63v-.958h-1V63h1zm0-2.875v-1.917h-1v1.917h1zm0-3.833v-1.917h-1v1.917h1zm0-3.834v-1.916h-1v1.916h1zm0-3.833v-1.917h-1v1.917h1zm0-3.833v-1.917h-1v1.917h1zm0-3.834V40h-1v.958h1zm0-.958c0-.333.022-.66.063-.98l-.991-.13A8.574 8.574 0 00.5 40h1zm.569-2.87c.253-.61.584-1.18.98-1.696l-.793-.609a8.49 8.49 0 00-1.11 1.921l.923.383zm2.365-3.08a7.487 7.487 0 011.695-.981l-.383-.924a8.495 8.495 0 00-1.92 1.111l.608.793zm3.586-1.487c.32-.041.648-.063.98-.063v-1c-.376 0-.746.024-1.11.072l.13.991zM9 32.5h1.01v-1H9v1zm3.029 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.02v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.02v1zm4.038 0h2.019v-1h-2.019v1zm4.038 0h2.02v-1h-2.02v1zm4.039 0h2.019v-1h-2.019v1zm4.038 0H114v-1h-1.01v1zm1.01 0c.376 0 .746-.024 1.11-.072l-.13-.991c-.32.041-.648.063-.98.063v1zm3.254-.645a8.506 8.506 0 001.921-1.111l-.609-.793a7.519 7.519 0 01-1.695.98l.383.924zm3.49-2.68a8.516 8.516 0 001.111-1.921l-.924-.383a7.527 7.527 0 01-.98 1.695l.793.609zm1.684-4.066c.048-.363.072-.733.072-1.109h-1c0 .332-.022.66-.063.98l.991.13zM122.5 24v-.958h-1V24h1zm0-2.875v-1.917h-1v1.917h1zm0-3.833v-1.917h-1v1.917h1zm0-3.834v-1.916h-1v1.916h1zm0-3.833V7.708h-1v1.917h1zm0-3.833V3.875h-1v1.917h1z"></path>
      </svg>
      <Flexbox align={'center'} className={styles.paragraph} horizontal>
        <Trans i18nKey={'knowledgeBase.list.empty'} ns={'file'}>
          点击 <kbd>+</kbd> 开始创建知识库
        </Trans>
      </Flexbox>
    </Flexbox>
  );
};

export default EmptyStatus;
