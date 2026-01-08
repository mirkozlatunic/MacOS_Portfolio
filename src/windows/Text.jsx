import { WindowControls } from '#components';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name || 'Untitled'}</h2>
      </div>

      <div className="bg-white p-5 space-y-6">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="max-w-full h-auto rounded" />
          </div>
        ) : null}

        {subtitle ? (
          <h3 className="text-lg font-semibold">{subtitle}</h3>
        ) : null}

        {description && Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-800 leading-relaxed text-base space-y-3"
              >
                {description.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
