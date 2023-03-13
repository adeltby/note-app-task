import React, { FormEvent, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import CreateableReactSelect from "react-select/creatable";
import { NoteData, Tag } from "./App"
import {v4 as uuidV4} from 'uuid'

type NoteFormProps = {
    onSubmit: (data: NoteData) => void
}

export default function NoteForm({onSubmit}: NoteFormProps) {
  
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]); 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    onSubmit({
        title: titleRef.current!.value,
        markdown: markdownRef.current!.value,
        tags: []
    })
    
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <FormGroup controlId="title">
              <FormLabel>Title</FormLabel>
              <FormControl required ref={titleRef} />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup controlId="tags">
              <FormLabel>Tag</FormLabel>
              <CreateableReactSelect 
              onCreateOption={label => {
                const newTag = {id: uuidV4(), label}
              }}
              value={selectedTags.map(tag => {
                return {
                    label: tag.label,
                    value: tag.id
                }
              })}
              
              onChange={tags => {
                setSelectedTags(tags.map(tag => {
                    return {                     
                        id: tag.value,
                        label: tag.label
                    }
                }))
              }}
              isMulti />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup controlId="markdown">
          <FormLabel>Detail</FormLabel>
          <FormControl required as="textarea" rows={15} ref={markdownRef} />
        </FormGroup>
        <Stack direction="horizontal" className="justify-content-end" gap={2}>
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Form>
  );
}
