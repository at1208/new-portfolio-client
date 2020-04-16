 import LinearProgress from '@material-ui/core/LinearProgress';

export default function CustomizedProgressBars() {

  return (
    <>
    <div className='mb-2'>
      <small>Html</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={80}
      />
    </div>

    <div className='mb-2'>
      <small>Css</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={70}
      />
    </div>

    <div className='mb-2'>
      <small>Javascript</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={80}
      />
    </div>

    <div className='mb-2'>
      <small>ReactJS</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={80}
      />
    </div>

    <div className='mb-2'>
      <small>Redux</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={80}
      />
    </div>

    <div className='mb-2'>
      <small>NextJS</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={70}
      />
    </div>

    <div className='mb-2'>
      <small>NodeJS</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={70}
      />
    </div>

    <div className='mb-2'>
      <small>ExpressJS</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={80}
      />
    </div>
    <div className='mb-2'>
      <small>Dart</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={60}
      />
    </div>
    <div className='mb-2'>
      <small>Flutter</small>
      <LinearProgress
        variant="determinate"
        color="primary"
        value={60}
      />
    </div>
    </>
  );
}
