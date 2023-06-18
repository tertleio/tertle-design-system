import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

import { Button } from '@/cmps/Core/Actions';

type ControlsProps = {
  section: 'user' | 'goal' | 'startup' | 'background' | 'match';
  // showDelete?: boolean;
  className?: string;
  onSave?: () => void;
  onEdit?: () => void;
  // onDelete?: () => void;
  onCancel: () => void;
};

const Controls = (props: ControlsProps) => {
  const {
    // showDelete,
    section,
    onEdit,
    onSave,
    onCancel,
    // onDelete,
  } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const searchParam = searchParams.get(section);
    if (!searchParam) {
      setIsEditing(false);
      setIsSaving(false);
      setShowSuccess(false);
      return;
    }
    if (searchParam === 'edit') {
      setIsEditing(true);
      setIsSaving(false);
      setShowSuccess(false);
      return;
    }
    if (searchParam === 'save') {
      setIsSaving(true);
      setIsEditing(false);
      setShowSuccess(false);
    }
    let successTimeout: undefined | NodeJS.Timeout;
    if (searchParam === 'saved') {
      setShowSuccess(true);
      setIsSaving(false);
      setIsEditing(false);
      successTimeout = setTimeout(() => {
        setShowSuccess(false);
        setSearchParams('', { replace: true });
      }, 2000);
    }

    return () => {
      clearTimeout(successTimeout);
      setIsSaving(false);
      setIsEditing(false);
      setShowSuccess(false);
    };
  }, [searchParams, setSearchParams, section]);

  return (
    <>
      {!isEditing && !isSaving && (
        <Button
          variant="secondary"
          size="md"
          color="orange"
          icon="edit"
          onClick={(e) => {
            e.stopPropagation();
            onEdit && onEdit();
          }}
        />
      )}

      {isSaving ? (
        <Button variant="secondary" size="md" color="orange" icon="spinner" />
      ) : (
        isEditing && (
          <>
            <Button
              variant="secondary"
              size="md"
              color="red"
              icon="cancel"
              onClick={(e) => {
                e.stopPropagation();
                onCancel && onCancel();
              }}
            />
            <Button
              variant="primary"
              size="md"
              color="green"
              icon="save"
              onClick={(e) => {
                e.stopPropagation();
                onSave && onSave();
              }}
            />
          </>
        )
      )}
      {showSuccess && (
        <div className="flex flex-row justify-end gap-3.5 sm:gap-2">
          <Button
            variant="tertiary"
            size="sm"
            color="green"
            className="pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="w-[18x] h-[18px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </Button>
        </div>
      )}
    </>
  );
};

export { Controls, type ControlsProps };
