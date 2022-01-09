import Box from '@material-ui/core/Box';

interface CtaBannerProps {
  title: string;
  paragraph: string;
  rightElement?: any;
}

const CtaBanner = ({ title, paragraph, rightElement }: CtaBannerProps) => {
  return (
    <Box className="xl:max-w-6xl lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-md mx-auto mt-32 mb-10 lg:mb-4">
      <Box className="flex flex-col bg-primary rounded-lg mx-6 py-4 px-6 lg:h-20 lg:flex-row sm:items-center h-full">
        <Box className="md:w-full self-start">
          <span className="text-white dark:text-white font-medium text-lg">
            {title}
          </span>
          <br />
          <span className="font-thin text-white">{paragraph}</span>
        </Box>
        {rightElement}
      </Box>
    </Box>
  );
};

export default CtaBanner;
